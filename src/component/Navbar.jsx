import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            classNameName="nav-logo"
            src="https://cache.fitnesspass.pe/img/fitness-pass-v2/global/logo_v2.svg"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" bold navbar-nav">
              <li className="nav-item">
                <p className="nav-link ">PARTNERS</p>
              </li>
              <li className="nav-item">
                <p className="nav-link ">COMO FUNCIONA</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">CORPORATIVO</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">PLANES</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">SHOP</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">BLOG</p>
              </li>
              <button type="button" className="button-login">
                INICIAR SESIÓN
              </button>
              <button type="button" className="button-register">
                REGÍSTRATE
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
