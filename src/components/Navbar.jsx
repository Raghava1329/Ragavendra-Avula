import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-700"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl font-extrabold tracking-wide">
          Ragavendra Avula
        </h1>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <motion.li
                key={item.path}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`text-white transition duration-200 px-2 py-1 rounded-md ${
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
                {/* Persistent Underline */}
                <motion.span
                  layoutId="nav-underline"
                  className={`absolute left-0 right-0 h-0.5 bg-blue-500 bottom-0 rounded-full ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-4 pt-2 space-y-2 bg-black bg-opacity-90"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-white text-lg px-2 py-1 rounded-md ${
                      isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
