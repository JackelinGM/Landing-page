import React from "react";
import "../style/coments.css";

const Coments = () => {
  return (
    <>
      <section className="container-eight p-5">
        <h5 className="press-title text-center p-3">
          Zona de Prensa - Entérate de lo último
        </h5>

        <div className="container-press row row-cols-1 row-cols-md-3 g-4 p-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://image.fitnesspass.pe/fit-in/300x200/img/fitness-pass-v2/press/contxto.jpg"
                className="card-img-top"
                alt="card1"
              />
              <div className="card-body">
                <h6 className="card-title">26/03/2020</h6>
                <p className="card-text">Latin American startups vs COVID-19</p>
              </div>
            </div>
          </div>
          <div className="col align-center">
            <div className="card h-100">
              <img
                src="https://image.fitnesspass.pe/fit-in/300x200/img/fitness-pass-v2/press/elcomercio.jpg"
                className="card-img-top"
                alt="card2"
              />
              <div className="card-body">
                <h6 className="card-title">26/03/2020</h6>
                <p className="card-text">
                  10 cuentas a seguir en fitness según el Comercio
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://image.fitnesspass.pe/fit-in/300x200/img/fitness-pass-v2/press/lacamara.jpg"
                className="card-img-top"
                alt="card3"
              />
              <div className="card-body">
                <h6 className="card-title">18/02/2020</h6>
                <p className="card-text">
                  Fitness Pass, la nueva tendencia en tecnología fitness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Coments };
