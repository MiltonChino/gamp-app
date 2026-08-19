import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  let dropdownMenu = [
    "Dirección de Agronomía y Medio Ambiente",
    "Dirección Urbanismo y Catástro",
    "Dirección Administrativa Financiera",
    "Desarrollo Humano",
  ];
  let navLinks = [
    "agronomia-y-medio-ambiente",
    "urbanismo-y-catastro",
    "administrativa-financiera",
    "desarrollo-humano",
  ];

  const style = {
    color: "#ffffff",
    backgroundColor: 'rgb(0, 128, 55)',
    borderRadius: '0 0 4px 4px'
  };

  return (
    <div className="container mb-3" style={style}>
      <nav className="navbar navbar-expand-md navbar-dark p-2" style={style}>
        {/* Mobile Header Bar with 3 Dashes (Hamburger) / X Close Icon */}
        <div className="d-flex justify-content-between align-items-center w-100 d-md-none">
          <span className="text-light font-weight-bold" style={{ fontSize: "1rem" }}>
          </span>
          <button
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="close-icon-x">&#10005;</span>
            ) : (
              <span className="hamburger-icon-dash">&#9776;</span>
            )}
          </button>
        </div>

        {/* Navigation Items (Desktop default, Mobile Collapsible) */}
        <div className={`mx-auto mobile-nav-collapse ${isOpen ? "show" : ""}`}>
          <ul style={style} className="nav nav-mobile-list justify-content-center align-items-center flex-wrap">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-light font-weight-bold px-3"
                style={style}
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/gaceta"
                className="nav-link text-light font-weight-bold px-3"
                style={style}
                onClick={closeMenu}
              >
                Gaceta
              </Link>
            </li>

            <li className="nav-item dropdown" style={style}>
              <a
                className="nav-link dropdown-toggle text-light font-weight-bold px-3"
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                style={style}
              >
                Direcciones
              </a>
              <div
                className={`dropdown-menu dropdown-menu-mobile ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                style={style}
              >
                <Link
                  to={"/direccion/" + navLinks[0]}
                  className="dropdown-item text-light"
                  style={style}
                  onClick={closeMenu}
                >
                  {dropdownMenu[0]}
                </Link>
                <Link
                  to={"/direccion/" + navLinks[1]}
                  className="dropdown-item text-light"
                  style={style}
                  onClick={closeMenu}
                >
                  {dropdownMenu[1]}
                </Link>
                <Link
                  to={"/direccion/" + navLinks[2]}
                  className="dropdown-item text-light"
                  style={style}
                  onClick={closeMenu}
                >
                  {dropdownMenu[2]}
                </Link>
                <Link
                  to={"/direccion/" + navLinks[3]}
                  className="dropdown-item text-light"
                  style={style}
                  onClick={closeMenu}
                >
                  {dropdownMenu[3]}
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-link text-light font-weight-bold px-3"
                style={style}
                onClick={closeMenu}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
