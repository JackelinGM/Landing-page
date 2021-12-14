import React, { Component } from 'react'
import "../style/ourpillars.css"

export class OurPillars extends Component {
    render() {
        return (
            <section class="content-two">
        <h5 class="text-center">NUESTROS PILARES</h5>
        <section class="container-two">
          <section class="cuadro1">
            <section class="icono">
              <img className="img" src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon1.svg"/>
            </section>
            <h4 class="titulo">Variedad de deporte</h4>
            <p class="texto">
              Funcional, yoga, baile, cardio Hiit, barre y más
            </p>
          </section>
          <section class="cuadro2">
            <section class="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon3.svg"
                
              />
            </section>
            <h4 class="titulo2">Nutrición</h4>
            <p class="texto2">Alimentación consciente e integral</p>
          </section>
          <section class="cuadro3">
            <section class="icono">
              <img className="img" src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon2.svg"
              />
            </section>
            <h4 class="titulo3">Bienestar mental</h4>
            <p class="texto4">Meditación y conexión interna</p>
          </section>
          <section class="cuadro4">
            <section class="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon4.svg"
                
              />
            </section>
            <h4 class="titulo">Comunidad y diversión</h4>
            <p class="texto">Balance entre lo divertido y saludable</p>
          </section>
        </section>
      </section>
        )
    }
}

export default OurPillars
