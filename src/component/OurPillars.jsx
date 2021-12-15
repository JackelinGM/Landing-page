import React from "react";
import "../style/ourpillars.css";

const OurPillars = () => {
  return (
    <>
      <section className="content-two">
        <h5 className="text-center">NUESTROS PILARES</h5>
        <section className="container-two">
          <section className="cuadro1">
            <section className="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon1.svg"
                alt=""
              />
            </section>
            <h4 className="titulo">Variedad de deporte</h4>
            <p className="texto">
              Funcional, yoga, baile, cardio Hiit, barre y más
            </p>
          </section>
          <section className="cuadro2">
            <section className="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon3.svg"
                alt=""
              />
            </section>
            <h4 className="titulo2">Nutrición</h4>
            <p className="texto2">Alimentación consciente e integral</p>
          </section>
          <section className="cuadro3">
            <section className="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon2.svg"
                alt=""
              />
            </section>
            <h4 className="titulo3">Bienestar mental</h4>
            <p className="texto4">Meditación y conexión interna</p>
          </section>
          <section className="cuadro4">
            <section className="icono">
              <img
                className="img"
                src="https://cache.fitnesspass.pe/img/fitness-pass-v2/life/life-landing-icon4.svg"
                alt=""
              />
            </section>
            <h4 className="titulo">Comunidad y diversión</h4>
            <p className="texto">Balance entre lo divertido y saludable</p>
          </section>
        </section>
      </section>
    </>
  );
};

export { OurPillars };
