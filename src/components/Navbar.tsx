import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const linkClasses =
    "transition-colors hover:text-black pb-1 border-b-2 border-transparent hover:border-red-600 hover:border-b-2 hover:border-red-500 text-gray-600 font-medium";

  const activeClasses = "text-gray-900 font-semibold hover:border-red-600";

  return (
    <nav className="absolute top-0 right-0 py-8 px-16 z-30">
      <ul className="flex items-center space-x-8 text-gray-600 font-medium text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeClasses}` : linkClasses
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/best"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeClasses}` : linkClasses
            }
          >
            Rent Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeClasses}` : linkClasses
            }
          >
            Why Choose Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeClasses}` : linkClasses
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
