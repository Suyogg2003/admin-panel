import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Balaji Electronics</NavLink>
        </div>

        {/* Hamburger Button */}
        <div
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <nav className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            {/* here we using turnery operater */}
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" onClick={() => setMenuOpen(false)}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {/* here turnery operater close */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
