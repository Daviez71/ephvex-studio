import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">Ephvex Studio</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Ephvex Studio. All rights
            reserved.
          </p>
          <a
            href="https://porfolio-daviez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block hover:text-amber-400"
          >
            Website Developed By Daviez
          </a>
        </div>

        <ul className="flex gap-6">
          <li>
            <NavLink to="/" end className="hover:text-amber-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="hover:text-amber-400">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-amber-400">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
