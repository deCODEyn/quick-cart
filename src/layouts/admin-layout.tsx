import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AdminNavbar, Sidebar } from '@/admin/admin-components';
import { useAuthContext } from '@/context';
import { useToast } from '@/hooks';

export function AdminLayout() {
  const { userRole, isLoading } = useAuthContext();
  const { showSuccessToast, showWarningToast } = useToast();
  const fromLogin = useLocation().state?.fromLogin;

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (userRole !== 'Admin') {
    if (fromLogin) {
      showWarningToast(
        'Access denied. User without administrator permission.',
        {
          autoClose: 3000,
        }
      );
      return <Navigate replace state={{ fromLogin: null }} to="/" />;
    }

    return <Navigate replace to="/login/admin" />;
  }

  if (fromLogin && userRole === 'Admin') {
    showSuccessToast('Login successful.');
    return <Navigate replace state={{ fromLogin: null }} to="/admin" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="flex w-full border-gray-500 border-t-2">
        <Sidebar />
        <div className="mx-auto my-8 ml-[max(5vw,25px)] w-[70%] text-base text-gray-600">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
