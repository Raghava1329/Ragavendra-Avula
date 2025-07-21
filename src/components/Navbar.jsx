import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function Navbar() {
  const { pathname } = useLocation();

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

        <ul className="flex space-x-6">
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
                    isActive || true ? "scale-x-100" : "scale-x-0"
                  }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}