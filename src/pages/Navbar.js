import { Outlet } from "react-router-dom";

import "./Navbar.css";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container text-black">
          <a className="navbar-brand fw-bold" href="/">
            PORTFOLIO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0 text">
              <li className="nav-item">
                <a href="/" className="nav-link fw-bold">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/About" className="nav-link fw-bold">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Experience" className="nav-link  fw-bold">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link  fw-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
