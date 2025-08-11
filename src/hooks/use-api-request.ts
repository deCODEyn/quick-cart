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
    (error: unknown) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;

      if (axios.isAxiosError(axiosError) && axiosError.response) {
        const errorMessage =
          axiosError.response.data?.message ||
          'An unexpected API error occurred.';
        showErrorToast(errorMessage);
        setRequestError(errorMessage);
        if (axiosError.response.data?.errors) {
          // Lógica para tratar os erros de validação
        }
      } else {
        const errorMessage = (error as Error).message;
        showErrorToast(errorMessage);
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
      onSuccess?: (result: T, message: string) => void,
      onFinish?: () => void
    ): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await requestFn();
        const { success, result, message } = response.data;
        if (success && onSuccess) {
          onSuccess(result as T, message || '');
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
        if (onFinish) {
          onFinish();
        }
      }
    }
  );

  return { isLoading, requestError, execute: executeRef.current };
}
