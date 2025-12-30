import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle,User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Catalog" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const whatsappLink =
    "https://wa.me/917045843342?text=Hello%20Fancy%20Collection%20NX%2C%20I%20would%20like%20to%20inquire%20about%20your%20fabrics.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-row items-center gap-4">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-20 w-20 object-cover rounded-full"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-2xl font-bold text-theme-heading tracking-wide">
                Fancy Collection
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-theme-accent"
                    : "text-theme-text hover:text-theme-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-theme-button text-theme-button-text rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* Admin */}
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-theme-button text-theme-button-text rounded-full text-sm font-medium"
            >
              <User size={18} />
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-theme-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-theme-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-base font-medium ${
                  isActive(link.path) ? "text-theme-accent" : "text-theme-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col ">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-theme-button text-theme-button-text rounded-full text-sm font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-theme-button text-theme-button-text rounded-full text-sm font-medium"
              >
                <User size={18} />
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
