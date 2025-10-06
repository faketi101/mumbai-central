import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'border-b-2 border-[#d4a017]' : '';
  };

  return (
    <nav className="w-full flex justify-center items-center gap-10 mt-6 text-lg font-semibold">
      <Link 
        to="/" 
        className={`underline-link ${isActive('/')}`}
      >
        HOME
      </Link>
      <Link to="/menu" className="underline-link">
        MENU
      </Link>
      <Link to="/about" className="underline-link">
        ABOUT
      </Link>

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
        className={`underline-link ${isActive('/careers')}`}
      >
        CAREERS
      </Link>
      <Link to="/reward" className="underline-link">
        REWARD
      </Link>
      <Link to="/contact" className="underline-link">
        CONTACT
      </Link>
    </nav>
  );
};

export default Header;