import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand" id="type-logo">
          <strong>Investment Society</strong> Imperial College London
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item ">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/team" className="nav-link">
                Team
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" className="nav-link">
                Partners
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sec" className="nav-link">
                SEC
              </Link>
            </li>
            <li className="navbar-item ">
              <Link to="/qtcapital" className="nav-link">
                QT Capital{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;