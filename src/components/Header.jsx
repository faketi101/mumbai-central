import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "border-b-2 border-[#d4a017]" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)] py-2">
      {/* Mobile and Tablet Header */}
      <nav className="md:hidden w-full flex justify-between items-center text-lg font-semibold px-4">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Mumbai Central Logo"
            className="w-36 hover:opacity-90 transition-opacity"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none z-[10000]"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white md:hidden flex flex-col justify-center items-center gap-8 z-[9999]">
          <Link
            to="/"
            className={`underline-link ${isActive("/")}`}
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <a
            href="/mumbai central menu (2).pdf"
            target="_blank"
            className="underline-link"
            onClick={toggleMenu}
          >
            MENU
          </a>
          <a href="/#about" className="underline-link" onClick={toggleMenu}>
            ABOUT
          </a>
          <Link
            to="/careers"
            className={`underline-link ${isActive("/careers")}`}
            onClick={toggleMenu}
          >
            CAREERS
          </Link>
          <a href="/#rewards" className="underline-link" onClick={toggleMenu}>
            REWARDS
          </a>
          <a href="/#contact" className="underline-link" onClick={toggleMenu}>
            CONTACT
          </a>
        </div>
      )}

      {/* Desktop Header */}
      <nav className="hidden md:flex w-full justify-center items-center gap-10 text-lg font-semibold sm:ml-[90px]">
        <Link to="/" className={`underline-link ${isActive("/")}`}>
          HOME
        </Link>
        <a
            href="/mumbai central menu (2).pdf"
            target="_blank"
            className="underline-link"
            onClick={toggleMenu}
          >
            MENU
          </a>
        <a href="/#about" className="underline-link">
          ABOUT
        </a>
        <div className="mx-6">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Mumbai Central Logo"
              className="w-48 mx-auto hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
        <Link
          to="/careers"
          className={`underline-link ${isActive("/careers")}`}
        >
          CAREERS
        </Link>
        <a href="/#rewards" className="underline-link">
          REWARDS
        </a>
        <a href="/#contact" className="underline-link">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
