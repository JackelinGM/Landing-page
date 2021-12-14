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
              <p className="title-sport-p">Nuestros partners expertos te <br /> guiarán en cada movimiento a través <br /> de clases en vivo y on demand.</p>
            </div>
            <button className="btn-sport">VER CLASS ON-DEMAND</button>
            <button className="btn-sport">VER CLASES EN VIVO</button>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export { VarietySports };
