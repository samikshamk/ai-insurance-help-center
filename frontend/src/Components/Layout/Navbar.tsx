import { NavLink } from "react-router-dom";
import Logo from "../UI/Logo";
import Menu from "../../config/Menu";

const Navbar = () => {

  return (
    <nav className="bg-white border-b border-gray-200 px-8 flex items-center justify-between h-14 sticky top-0 z-50">
      <Logo />

      {/* Nav Links */}
      <ul className="flex items-center gap-8 list-none">
        {Menu.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "text-indigo-600 font-medium border-b-2 border-indigo-600 pb-0.5"
                  : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </ul>

      {/* Sign In */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
