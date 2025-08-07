import { Link } from 'react-router-dom';

export function Company() {
  return (
    <div>
      <p className="mb-5 font-medium text-xl">COMPANY</p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        {/* <li>Delivery</li> */}
      </ul>
    </div>
  );
}
