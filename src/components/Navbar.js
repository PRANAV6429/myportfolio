import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AiOutlineHome, 
  AiOutlineFundProjectionScreen, 
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineSafetyCertificate,
  AiOutlineTrophy,
  AiOutlineContacts
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <AiOutlineHome className="text-xl" /> },
    { name: "About", path: "/about", icon: <AiOutlineUser className="text-xl" /> },
    { name: "Skills", path: "/skills", icon: <AiOutlineCode className="text-xl" /> },
    { name: "Projects", path: "/project", icon: <AiOutlineFundProjectionScreen className="text-xl" /> },
    { name: "Resume", path: "/resume", icon: <CgFileDocument className="text-xl" /> },
    { name: "Certifications", path: "/certifications", icon: <AiOutlineSafetyCertificate className="text-xl" /> },
    { name: "Achievements", path: "/achievements", icon: <AiOutlineTrophy className="text-xl" /> },
    { name: "Contact", path: "/contact", icon: <AiOutlineContacts className="text-xl" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? "bg-dark-bg/80 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-white/5 py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-1 group">
          <span className="text-primary group-hover:text-glow transition-all duration-300">P</span>
          <span className="text-white">A.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 font-medium transition-all duration-300 relative group ${
                location.pathname === item.path ? "text-primary text-glow" : "text-text-main hover:text-primary hover:-translate-y-1"
              }`}
            >
              {item.icon}
              {item.name}
              <span 
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <X size={28} className="text-primary p-1 bg-white/10 rounded-md" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {expand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setExpand(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
                    location.pathname === item.path 
                      ? "bg-primary/20 text-primary border border-primary/30" 
                      : "text-text-main hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
