import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useToast } from '@/hooks';
import type {
  ApiErrorResponse,
  ApiResponse,
  UseApiRequestErrorHandlingReturn,
  UseApiRequestReturn,
} from '@/types';

function formatValidationErrors(
  errors: { field: string; message: string }[]
): string {
  let formattedMessage = 'Validation Errors:\n';
  for (const error of errors) {
    formattedMessage += `Field: ${error.field} - ${error.message}\n`;
  }

  return formattedMessage;
}

function useApiRequestErrorHandling(): UseApiRequestErrorHandlingReturn {
  const { showErrorToast } = useToast();
  const [requestError, setRequestError] = useState<string | null>(null);

  const handleError = useCallback(
    (error: unknown, suppressErrorToast = false) => {
      if (suppressErrorToast) {
        return;
      }
      const axiosError = error as AxiosError<ApiErrorResponse>;
      if (axios.isAxiosError(axiosError) && axiosError.response) {
        const apiErrors = axiosError.response.data?.errors;
        if (apiErrors && apiErrors.length > 0) {
          const formattedErrorMessage = formatValidationErrors(apiErrors);
          showErrorToast(formattedErrorMessage, { autoClose: 5000 });
          const errorMessage =
            'Validation Error. Please check the fields below.';
          setRequestError(errorMessage);
        } else {
          const errorMessage =
            axiosError.response.data?.message ||
            'An unexpected API error occurred.';

          showErrorToast(errorMessage);
          setRequestError(errorMessage);
        }
      } else {
        const errorMessage = (error as Error).message;
        if (!suppressErrorToast) {
          showErrorToast(errorMessage);
        }
        setRequestError(errorMessage);
      }
    },
    [showErrorToast]
  );

  return { handleError, requestError };
}

export function useApiRequest(): UseApiRequestReturn {
  const [isLoading, setIsLoading] = useState(false);
  const { handleError, requestError } = useApiRequestErrorHandling();

  const executeRef = useRef(
    async <T>(
      requestFn: () => Promise<AxiosResponse<ApiResponse<T>>>,
      suppressErrorToast = false
    ): Promise<ApiResponse<T>> => {
      setIsLoading(true);
      try {
        const response = await requestFn();
        return response.data;
      } catch (error) {
        handleError(error, suppressErrorToast);
        return { success: false, result: undefined, message: undefined };
      } finally {
        setIsLoading(false);
      }
    }
  );

  return {
    isLoading,
    requestError,
    execute: executeRef.current,
  };
}
