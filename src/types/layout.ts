import type { ToastOptions } from 'react-toastify';

export interface UseToastReturn {
  showErrorToast: (message: string, options?: ToastOptions) => void;
  showInfoToast: (message: string, options?: ToastOptions) => void;
  showSuccessToast: (message: string, options?: ToastOptions) => void;
  showWarningToast: (message: string, options?: ToastOptions) => void;
}
