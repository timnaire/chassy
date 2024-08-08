import { NavLink, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  return (
    <footer className="border-t-2 border-t-fuchsia-900">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-between">
          <ul className="hidden md:flex">
            {location.pathname !== '/' && (
              <li className="md:px-5 py-6">
                <NavLink className="md:text-md lg:text-2xl" to={`/`}>
                  Home
                </NavLink>
              </li>
            )}
            {location.pathname !== '/case-studies' && (
              <li className="md:px-5 py-6">
                <NavLink className="md:text-md lg:text-2xl" to={`/case-studies`}>
                  Case Studies
                </NavLink>
              </li>
            )}
            {location.pathname !== '/about' && (
              <li className="md:px-5 py-6">
                <NavLink className="md:text-md lg:text-2xl" to={`/about`}>
                  About
                </NavLink>
              </li>
            )}
            {location.pathname !== '/contact' && (
              <li className="md:px-5 py-6">
                <NavLink className="md:text-md lg:text-2xl" to={`/contact`}>
                  Contact
                </NavLink>
              </li>
            )}
          </ul>
          <div className="flex self-center text-center">© 2024 CharcaeDesign. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
