import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logowhite.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Book', href: '/book' },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-r bg-[#db652f] rounded-lg flex items-center justify-center">
            </div> */}
            <img
              className="w-10 h-10 bg-gradient-to-r bg-[#db652f] rounded-lg "
              src={logo}
              alt=""
            />
            <span className="text-2xl font-bold text-[#db652f]">
              LEADWISE BIZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#db652f] bg-[#f8eee7]"
                    : "text-gray-700 hover:text-[#db652f] hover:bg-[#f8eee7]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-gradient-to-r bg-[#db652f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#db652f]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#db652f] hover:bg-[#f8eee7] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[#db652f] bg-[#f8eee7]"
                      : "text-gray-700 hover:text-[#db652f] hover:bg-[#f8eee7]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-[#db652f]  text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-[#db652f]/90  transition-all duration-200"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
