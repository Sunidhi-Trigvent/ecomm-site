import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      name: "HOME",
      navLinks: "/",
    },
    {
      id: 2,
      name: "ABOUT",
      navLinks: "/about",
    },
    {
      id: 3,
      name: "PRODUCTS",
      navLinks: "/products",
    },
    {
      id: 4,
      name: "CONTACT",
      navLinks: "/contact",
    },
  ];

  return (
    <>
      <header className="header_section">
        <nav className="navbar">
          <span>Amazon store</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {navItems?.map((item) => (
                <li
                  className={`nav-item  ${
                    location?.pathname === item?.navLinks && "active"
                  }`}
                >
                  <Link className="nav-link" to={item.navLinks}>
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
