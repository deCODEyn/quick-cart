import { Navigate, Outlet } from 'react-router-dom';
import { AdminNavbar, Sidebar } from '@/admin/admin-components';
import { useAuthContext } from '@/context';

export function AdminLayout() {
  const { userRole, isLoading } = useAuthContext();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (userRole !== 'Admin') {
    return <Navigate replace to="/login/admin" />;
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
