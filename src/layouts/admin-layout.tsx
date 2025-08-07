import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNavbar, Sidebar } from '@/admin/admin-components';
import { AdminLogin } from '@/admin/pages';

export function AdminLayout() {
  const [token, setToken] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {token === '' ? (
        <AdminLogin />
      ) : (
        <>
          <AdminNavbar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="mx-auto my-8 ml-[max(5vw,25px)] w-[70%] text-base text-gray-600">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
