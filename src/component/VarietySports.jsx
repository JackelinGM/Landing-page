import React from "react";
import "../style/varietysport.css";

const VarietySports = () => {
  return (
    <>
      <section className="container-sport">
        <section className="d-flex justify-content-center text-left align-items-center column-reverse-mobile">
          <div className="box-title-sport">
            <h3 className="title-sport-text">Variedad de deportes</h3>
          </div>
          <div className="box-text-sport">
            
            <div>
              <div>
                <p className="title-sport-p">
                  Nuestros partners expertos te <br /> guiarán en cada
                  movimiento a través <br /> de clases en vivo y on demand.
                </p>
              </div>
              <button className="btn-sport">VER CLASS ON-DEMAND</button>
              <button className="btn-sport">VER CLASES EN VIVO</button>
            </div>
          </div>
        </section>
        <section className="content-sport2 m-3 p-4">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="background m-1 sports-1">
              <a href="/#">
                <h3 className="text-white bold text-sport">
                  Entrenamiento <br /> funcional
                </h3>
              </a>
            </div>
            <div className="background m-1 sports-2">
              <a href="/#">
                <h3 className="text-white bold text-sport">
                  Cardio y <br /> HIIT
                </h3>
              </a>
            </div>
            <div className="background m-1 sports-3">
              <a href="/#">
                <h3 className="text-white bold text-sport">
                  Yoga y <br /> meditación
                </h3>
              </a>
            </div>
            <div className="background m-1 life-landin sports-4">
              <a href="/#">
                <h3 className="text-white bold text-sport">Baile</h3>
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export { VarietySports };
