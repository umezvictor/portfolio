import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    console.log("toggled");
    setShowHamburgerMenu(!showHamburgerMenu);
  };
  return (
    <>
      <nav className="nav">
        <div className="hamburger-menu">
          <button
            type="button"
            className="btn btn-lg"
            onClick={toggleHamburgerMenu}
          >
            <i className="bi bi-list"></i>
          </button>
          <div
            className={`${showHamburgerMenu ? "show-hamburger-menu-links" : "hide-hamburger-menu-links"}`}
          >
            <a href="/" className="nav-link">
              Victor Umezuruike
            </a>
            <a href="/" className="nav-link">
              Home
            </a>
            <a
              href="https://www.linkedin.com/in/victorumezuruike/"
              className="nav-link"
            >
              LinkedIn
              <span>
                {" "}
                <i className="bi bi-box-arrow-up-right"></i>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/victorumezuruike/"
              className="nav-link"
            >
              Resume
              <span>
                {" "}
                <i className="bi bi-box-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="nav-links">
          <a href="/" className="nav-link">
            Victor Umezuruike
          </a>
          <a href="/" className="nav-link">
            Home
          </a>
          <a
            href="https://www.linkedin.com/in/victorumezuruike/"
            className="nav-link"
          >
            LinkedIn
            <span>
              {" "}
              <i className="bi bi-box-arrow-up-right"></i>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/victorumezuruike/"
            className="nav-link"
          >
            Resume
            <span>
              {" "}
              <i className="bi bi-box-arrow-up-right"></i>
            </span>
          </a>
        </div>

        <div className="extra-links">
          <a href="https://github.com/umezvictor" className="extra-nav-link">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
