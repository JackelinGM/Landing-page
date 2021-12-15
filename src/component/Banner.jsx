import React from "react";
import "../style/banner.css";

const Banner = () => {
  return (
    <section class="content-one d-flex flex-wrap image-right justify-content-md-start ">
      <section className="content-banner">
        <h2 class="title">
          <span className="bold">LIFE </span>
          by Fitness Pass
        </h2>
        <div className="subtitle-banner">
          <h3 className="content-subtitle">
            Tu menbresía de
            <strong> " bienestar integral "</strong> en español 100% online.
          </h3>
        </div>
        <div class="hr">
          <hr />
        </div>
        <h4 class="subtitle-content">
          Descubre miles de clases fitness online de los mejores partners y
          obtén sesiones personalizadas en nutricion & health coaching.Encuentra
          el balance perfecto para tí estés donde estés.
        </h4>
        <div className="button-general">
          <button class="button-individual">Ver Planes Individuales</button>
          <button class="button-corporate">Ver Planes Corporativos</button>
        </div>
      </section>
    </section>
  );
};

export { Banner };
