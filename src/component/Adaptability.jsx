import React from "react";
import "../style/adaptability.css";

const Adaptability = () => {
  return (
    <>
      <section className="container-four">
        <div className="d-flex justify-content-center text-left align-items-center column-reverse-mobile box-container-adapta">
          <div className="box-adapta">
            <img
              src="https://image.fitnesspass.pe/fit-in/500x570/filters:quality(90)/img/fitness-pass-v2/life/phone.png "
              alt="icon-job"
            />
          </div>
          <div className="box-text-adapta">
            <h3 className="adapta-title">Nos Adaptamos a ti</h3>
            <p className="adapta-p">
              Contenido 100% digital con el objetivo de encontrar el balance
              entre tu vida fit, salud mental y alimentación integral a través
              de sesiones personalizadas uno-a-uno, clases en vivo y on demand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export { Adaptability };
