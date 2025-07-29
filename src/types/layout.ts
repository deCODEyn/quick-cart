import type { ToastOptions } from 'react-toastify';

export interface UseToastReturn {
  showSuccessToast: (message: string, options?: ToastOptions) => void;
  showErrorToast: (message: string, options?: ToastOptions) => void;
  showWarningToast: (message: string, options?: ToastOptions) => void;
  showInfoToast: (message: string, options?: ToastOptions) => void;
}
