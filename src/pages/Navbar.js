import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
        setIsMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "edu-nav-link edu-nav-link-active" : "edu-nav-link";

  const mobileNavClass = ({ isActive }) =>
    isActive ? "edu-mobile-link edu-mobile-link-active" : "edu-mobile-link";

  return (
    <header className={`edu-navbar ${showNavbar ? "show" : "hide"}`}>
      <nav className="edu-navbar-inner">
        <Link to="/" className="edu-logo-link" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Institution Logo" className="edu-logo" />
        </Link>

        <div className="edu-nav-links">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>

          <NavLink to="/courses" className={navClass}>
            Courses
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact Us
          </NavLink>
        </div>

        <button
          type="button"
          className={`edu-menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`edu-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className={mobileNavClass} onClick={closeMenu} end>
          Home
        </NavLink>

        <NavLink to="/courses" className={mobileNavClass} onClick={closeMenu}>
          Courses
        </NavLink>

        <NavLink to="/about" className={mobileNavClass} onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/contact" className={mobileNavClass} onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;