import { Menu, X } from "lucide-react"; // You can use Heroicons if preferred
import { useState } from "react";
import { Link, NavLink } from "react-router"; // Make sure you're using react-router-dom
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Service", path: "/service" },
    { label: "Project", path: "/project" },
    { label: "Blogs", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const activeClass =
    "relative font-bold text-[#222] pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-red-500";
  const inactiveClass = "text-[#222] font-medium";

  return (
    <div className="py-2.5 sticky top-0 z-50 shadow bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>

          {/* Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <button className="font-primary bg-primary rounded-md py-3 px-2 text-white font-bold text-[12px] uppercase">
              Request a call Back
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : inactiveClass
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <button className="w-full font-primary bg-primary rounded-md py-3 text-white font-bold text-[12px] uppercase">
                Request a call Back
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
