import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide uppercase transition-colors ${
      isActive ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
    }`;
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/">
          <img src={logo} alt="Ephvex Studio" className="h-12 w-auto sm:h-20" />
        </NavLink>
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
