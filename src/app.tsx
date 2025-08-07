import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdminLayout, PublicLayout, ScrollToTop } from '@/layouts';
import {
  About,
  Cart,
  Collection,
  Contact,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Product,
} from '@/pages';
import { AdminHome } from './admin/pages/admin-home';

export default function App() {
  const user = 'admin';

  return (
    <>
      <ToastContainer newestOnTop />
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
          <Route element={<Collection />} path="collection" />
          <Route element={<Cart />} path="cart" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Login />} path="login" />
          <Route element={<Orders />} path="orders" />
          <Route element={<PlaceOrder />} path="place-order" />
          <Route element={<Product />} path="product/:productId" />
        </Route>

        {user === 'admin' && (
          <Route element={<AdminLayout />} path="/admin">
            <Route element={<AdminHome />} index />
          </Route>
        )}
      </Routes>
    </>
  );
}
