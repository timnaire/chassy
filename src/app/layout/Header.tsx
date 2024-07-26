import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="flex justify-center">
        <ul className="flex">
          <li className="px-16 py-6">
            <NavLink className={({ isActive }) => isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl'} to={`/`}>
              Home
            </NavLink>
          </li>
          <li className="px-16 py-6">
            <NavLink className={({ isActive }) => isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl'} to={`/about`}>
              Case Studies
            </NavLink>
          </li>
          <li className="px-16 py-6">
            <NavLink className={({ isActive }) => isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl'} to={`/about`}>
              About
            </NavLink>
          </li>
          <li className="px-16 py-6">
            <NavLink className={({ isActive }) => isActive ? 'text-2xl text-fuchsia-700' : 'text-2xl'} to={`/contact`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
