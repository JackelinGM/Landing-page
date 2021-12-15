import React from "react";
import "../style/footer.css";

const FooterDesk = () => {
  return (
    <div classNameName="d-flex flex-column h-100">
      <footer className="w-100 py-4 flex-shrink-0 bg-destok">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">La empresa</h5>
              <p className="small text-muted">Blog</p>
              <p className="small text-muted mb-0">Nosotros</p>
              <p className="small text-muted mb-0">Privacidad</p>
              <p className="small text-muted mb-0">Términos y Condiciones</p>
              <p className="small text-muted mb-0">Preguntas frecuentes</p>
              <p className="small text-muted mb-0">Libro de reclamaciones </p>
              <i className="fas fa-book-open"></i>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Más</h5>
              <p className="small text-muted">Quiero ser partner</p>
              <p className="small text-muted">Ver planes</p>
              <p className="small text-muted">Centros</p>
              <p className="small text-muted">Clases</p>
              <p className="small text-muted">Planes corporativos</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <button className="subTitle-button">SUGIERE UN CENTRO</button>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">¿Necesitas ayuda?</h5>
              <i className="fas fa-mobile-alt"></i>
              <p className="small text-muted">+51 941 399 209</p>
              <i className="fab fa-facebook designIcon"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <p>©2021 Fitness Pass® Todos los derechos reservados.</p>
        <p>contacto@fitnesspass.pe</p>
      </footer>
    </div>
  );
};

export { FooterDesk };
