import { type ToastOptions, toast, Zoom } from 'react-toastify';
import type { UseToastReturn } from '@/types';

export function useToast(): UseToastReturn {
  const defaultOptions: ToastOptions = {
    autoClose: 2000,
    closeButton: false,
    closeOnClick: true,
    draggable: false,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    position: 'top-left',
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
  };

  const showSuccessToast = (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  };

  const showErrorToast = (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  };

  const showWarningToast = (message: string, options?: ToastOptions) => {
    toast.warn(message, { ...defaultOptions, ...options });
  };

  const showInfoToast = (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  };

  return {
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
  };
}
