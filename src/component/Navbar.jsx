import React from 'react'
// import {ModalWelcome} from "../component/ModalWelcome.jsx"
import "../style/navbar.css"

const Navbar =()=>{
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <img  className="nav-logo"src="https://cache.fitnesspass.pe/img/fitness-pass-v2/global/logo_v2.svg" alt=""/>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class=" bold navbar-nav">
            <li class="nav-item">
              <p class="nav-link " 
                >PARTNERS</p>
            </li>
            <li class="nav-item">
              <p class="nav-link " >COMO FUNCIONA</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" >CORPORATIVO</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" >PLANES</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" >SHOP</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" >BLOG</p>
            </li>
            <button type="button" class="button-login">INICIAR SESIÓN</button>
            <button type="button" class="button-register">REGÍSTRATE</button>
          </ul>
          </div>
      </div>
      </nav> 
       {/* < ModalWelcome />  */}
      </>

    )
}

export { Navbar}