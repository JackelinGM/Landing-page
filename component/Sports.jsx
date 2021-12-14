import React from "react";
import "../style/sports.css";

const Sports = () => {
  return (
    <>
      <section className="content-sport2 m-3 p-4">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="background m-1 sports-1">
            <a href="/#">
              <h3 className="text-white bold text-sport">Entrenamiento <br /> funcional</h3>
            </a>
          </div>
          <div className="background m-1 sports-2">
            <a href="/#">
              <h3 className="text-white bold text-sport">Cardio y <br /> HIIT</h3>
            </a>
          </div>
          <div className="background m-1 sports-3">
            <a href="/#">
              <h3 className="text-white bold text-sport">Yoga y <br /> meditación</h3>
            </a>
          </div>
          <div className="background m-1 life-landin sports-4">
            <a href="/#">
              <h3 className="text-white bold text-sport">Baile</h3>
            </a>
          </div>
        </div>
      </section>
    
  
    </>
  );
};

export { Sports };
