import { Mail, Linkedin, Twitter, Instagram, Book, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#db652f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-2xl font-bold">Business Coach</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              I empower empower young enttrepreneurs with faith-rooted
              decipline, vision and resilience to build purposeful businesses
              that lead and inspire.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:coach@example.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Book size={16} className="mr-2" />
                  Free Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Users size={16} className="mr-2" />
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Favour Aruwei. All rights reserved.
            Built with passion for entrepreneurial success by maincroft
            technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
