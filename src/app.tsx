import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from '@/components';
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
    <div className="lg:px[9vw px-4 sm:px-[5vw] md:px-[7vw">
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Collection />} path="/collection" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Login />} path="/login" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<PlaceOrder />} path="/place-order" />
        <Route element={<Product />} path="/product/:productId" />
      </Routes>

      <Footer />
    </div>
  );
}
