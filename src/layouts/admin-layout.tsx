import { Navigate, Outlet } from 'react-router-dom';
import { AdminNavbar, Sidebar } from '@/admin/admin-components';
import { useAuth } from '@/hooks';

export function AdminLayout() {
  const { userRole, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (userRole !== 'Admin') {
    return <Navigate replace to="/login/admin" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="mx-auto my-8 ml-[max(5vw,25px)] w-[70%] text-base text-gray-600">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
