import React from "react";
import "../style/nutrition.css";

const Nutrition = () => {
  return (
    <>
      <section className="container-four">
        <div className="d-flex justify-content-center text-left align-items-center column-reverse-mobile m-4 p-4 box-container-1">
          <div className="box-text">
            <h4 className="health-title">Nutrición</h4>
            <p className="health-p">
              Sesiones one-to-one y talleres con nutricionistas profesionales
              para una alimentación consciente.
            </p>
            <button className="btn-health">DESCUBRE NUTRICIÓN</button>
          </div>
          <div className="box-img">
            <img
              className="img-health"
              src="https://image.fitnesspass.pe/fit-in/500x570/filters:quality(90)/img/fitness-pass-v2/life/nutricion2.0.jpg"
              alt="health1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Nutrition };
