import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  AdminHome,
  AdminLogin,
  CreateProduct,
  EditProduct,
  ListProducts,
  ManageOrders,
} from '@/admin/admin-pages';
import { AdminLayout, PublicLayout, ScrollToTop } from '@/layouts';
import {
  About,
  Cart,
  ChangePassword,
  Collection,
  Contact,
  EditProfile,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Product,
  UserProfile,
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
          <Route element={<UserProfile />} path="profile" />
          <Route element={<EditProfile />} path="profile/edit" />
          <Route element={<ChangePassword />} path="profile/change-password" />
        </Route>

        <Route element={<AdminLogin />} path="/login/admin" />

        <Route element={<AdminLayout />} path="/admin">
          <Route element={<AdminHome />} index />
          <Route element={<CreateProduct />} path="create" />
          <Route element={<ListProducts />} path="list" />
          <Route element={<EditProduct />} path="edit" />
          <Route element={<ManageOrders />} path="orders" />
        </Route>
      </Routes>
    </>
  );
}
