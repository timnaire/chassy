import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Drawer from '../shared/components/Drawer';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header className="relative z-30">
      <div
        className={
          isHome
            ? 'bg-gradient-to-r from-white via-white to-fuchsia-100 hidden md:flex flex justify-center'
            : 'hidden md:flex flex justify-center'
        }
      >
        <ul className="flex font-medium">
          <li className="md:px-6 lg:px-16 py-6">
            <NavLink className={({ isActive }) => (isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl')} to={`/`}>
              Home
            </NavLink>
          </li>
          <li className="md:px-6 lg:px-16 py-6">
            <NavLink
              className={({ isActive }) => (isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl')}
              to={`/case-studies`}
            >
              Case Studies
            </NavLink>
          </li>
          <li className="md:px-6 lg:px-16 py-6">
            <NavLink className={({ isActive }) => (isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl')} to={`/about`}>
              About
            </NavLink>
          </li>
          <li className="md:px-6 lg:px-16 py-6">
            <NavLink
              className={({ isActive }) => (isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl')}
              to={`/contact`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="h-12 flex self-center md:hidden bg-gradient-to-r from-white via-white to-fuchsia-100">
        <div className="grow flex justify-end self-center mr-3">
          <span onClick={() => setIsOpen(true)} className="material-icons md-36 text-fuchsia-500">
            menu
          </span>
        </div>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <ul className="font-medium">
            <li className="pl-5 py-6">
              <NavLink
                className={({ isActive }) => (isActive ? 'text-xl text-fuchsia-700' : 'text-2xl')}
                to={`/`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="pl-5 py-6">
              <NavLink
                className={({ isActive }) => (isActive ? 'text-xl text-fuchsia-700' : 'text-2xl')}
                to={`/case-studies`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </NavLink>
            </li>
            <li className="pl-5 py-6">
              <NavLink
                className={({ isActive }) => (isActive ? 'text-xl text-fuchsia-700' : 'text-2xl')}
                to={`/about`}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="pl-5 py-6">
              <NavLink
                className={({ isActive }) => (isActive ? 'text-xl text-fuchsia-700' : 'text-2xl')}
                to={`/contact`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
}
