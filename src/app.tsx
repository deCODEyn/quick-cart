import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  AddProducts,
  AdminHome,
  AdminLogin,
  ListProducts,
  ManageOrders,
} from '@/admin/admin-pages';
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

export default function App() {
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

        <Route element={<AdminLogin />} path="/login/admin" />

        <Route element={<AdminLayout />} path="/admin">
          <Route element={<AdminHome />} index />
          <Route element={<AddProducts />} path="add" />
          <Route element={<ListProducts />} path="list" />
          <Route element={<ManageOrders />} path="orders" />
        </Route>
      </Routes>
    </>
  );
}
