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

function useApiRequestErrorHandling(): UseApiRequestErrorHandlingReturn {
  const { showErrorToast } = useToast();
  const [requestError, setRequestError] = useState<string | null>(null);

  const handleError = useCallback(
    (error: unknown, suppressErrorToast = false) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;

      if (axios.isAxiosError(axiosError) && axiosError.response) {
        const errorMessage =
          axiosError.response.data?.message ||
          'An unexpected API error occurred.';
        if (!suppressErrorToast) {
          showErrorToast(errorMessage);
        }
        setRequestError(errorMessage);
        if (axiosError.response.data?.errors) {
          // Lógica para tratar os erros de validação
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
  const [requestSuccess, setRequestSuccess] = useState(false);
  const { handleError, requestError } = useApiRequestErrorHandling();

  const executeRef = useRef(
    async <T>(
      requestFn: () => Promise<AxiosResponse<ApiResponse<T>>>,
      suppressErrorToast = false
    ): Promise<{
      success: boolean;
      result: T | null;
      message: string | null;
    }> => {
      setIsLoading(true);
      setRequestSuccess(false);

      try {
        const response = await requestFn();
        const { success, result, message } = response.data;
        setRequestSuccess(success);
        return {
          success,
          result: (result as T) || null,
          message: message || null,
        };
      } catch (error) {
        handleError(error, suppressErrorToast);
        setRequestSuccess(false);
        return { success: false, result: null, message: null };
      } finally {
        setIsLoading(false);
      }
    }
  );

  return {
    isLoading,
    requestError,
    requestSuccess,
    execute: executeRef.current,
  };
}
