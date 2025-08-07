import { Outlet } from 'react-router-dom';
import { Footer, Navbar, SearchBar } from '@/components';

export function PublicLayout() {
  return (
    <div className="lg:px[9vw px-4 sm:px-[5vw] md:px-[7vw">
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
}
