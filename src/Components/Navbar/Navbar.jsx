import React, { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.css";
import throttle from "lodash.throttle";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const myButtonRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 50);

    window.addEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => {
    setNavOpen(true);
    if (navOpen && window.innerWidth < 768) {
      setTimeout(() => {
        myButtonRef.current.click();
      }, 150);
      setNavOpen(false);
    }
  };

  return (
    <header
      className={`bgDarkTeal ${scrollY > 0 ? "py-2" : "py-4"} ${
        style.navTranstion
      } fixed-top`}
    >
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link onClick={closeNav} className="navbar-brand fs-3 fw-bold" to="/">
            START FRAMEWORK
          </Link>
          <button
            ref={myButtonRef}
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto align-items-start mt-2 gap-3 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  onClick={closeNav}
                  className="nav-link btn text-uppercase fw-bold py-2 px-3 fs-6 text-white"
                  to="about"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeNav}
                  className="nav-link btn text-uppercase fw-bold py-2 px-3 fs-6 text-white"
                  to="portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeNav}
                  className="nav-link btn text-uppercase fw-bold py-2 px-3 fs-6 text-white"
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
