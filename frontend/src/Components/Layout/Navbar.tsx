import { NavLink } from "react-router-dom";
import Logo from "../UI/Logo";
import Menu from "../../config/Menu";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleDark } = useTheme();

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
      <button
        onClick={toggleDark}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun size={16} className="text-yellow-400" />
        ) : (
          <Moon size={16} className="text-gray-600" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
