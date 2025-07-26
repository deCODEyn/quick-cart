import { CircleArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';
import { NavbarLink } from '../navbar/navbar-link';

export function MobileMenu() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Menu
        className="w-5 cursor-pointer md:hidden"
        onClick={() => setVisible(true)}
      />

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className="flex flex-col text-gray-700">
          <div className="flex items-center gap-4 p-3">
            <CircleArrowRight
              className="h-6 rotate-180 cursor-pointer"
              onClick={() => setVisible(false)}
            />
            <p>Back</p>
          </div>
          <ul>
            <NavbarLink isMobile={true} onClick={() => setVisible(false)} />
          </ul>
        </div>
      </div>
    </>
  );
}
