import React from "react";
import "../style/mentalwellness.css";

const MentalWellness = () => {
  return (
    <>
      <div className="d-flex justify-content-center text-left align-items-center column-reverse-mobile p-4 box-container-2">
        <div className="box-img">
          <img
            className="img-health"
            src="https://image.fitnesspass.pe/fit-in/500x570/filters:quality(90)/img/fitness-pass-v2/life/healthcoach2.0.jpg"
            alt=""
          />
        </div>
        <div className="box-text">
          <h4 className="health-title">Bienestar mental</h4>
          <p className="health-p">
            Mentorías one-to-one y talleres con health coaches profesionales
            para encontrar tu equilibrio de mente y cuerpo.
          </p>
          <button className="btn-health">DESCUBRE HEALTH COACH</button>
        </div>
      </div>
    </>
  );
};

export { MentalWellness };
