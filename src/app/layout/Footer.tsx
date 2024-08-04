import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t-2 border-t-fuchsia-900">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-between">
          <ul className="hidden md:flex">
            <li className="md:px-5 py-6">
              <NavLink className="md:text-md lg:text-2xl" to={`/`}>
                Home
              </NavLink>
            </li>
            <li className="md:px-5 py-6">
              <NavLink className="md:text-md lg:text-2xl" to={`/case-studies`}>
                Case Studies
              </NavLink>
            </li>
            <li className="md:px-5 py-6">
              <NavLink className="md:text-md lg:text-2xl" to={`/about`}>
                About
              </NavLink>
            </li>
          </ul>
          <div className="flex self-center">
            © 2023 CharcaeDesign. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
