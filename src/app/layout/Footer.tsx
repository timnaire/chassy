import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <ul className="flex">
            <li className="px-16 py-6">
              <NavLink className="text-2xl" to={`/`}>
                Home
              </NavLink>
            </li>
            <li className="px-16 py-6">
              <NavLink className="text-2xl" to={`/about`}>
                Case Studies
              </NavLink>
            </li>
            <li className="px-16 py-6">
              <NavLink className="text-2xl" to={`/about`}>
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
