import React from 'react'
import "../style/footer.css"

const FooterDesk =()=>{
        return (
            <div class="d-flex flex-column h-100">      
            <footer class="w-100 py-4 flex-shrink-0 bg-destok">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-white">La empresa</h5>
                            <p class="small text-muted">Blog</p>
                            <p class="small text-muted mb-0">Nosotros</p>
                            <p class="small text-muted mb-0">Privacidad</p>
                            <p class="small text-muted mb-0">Términos y Condiciones</p>
                            <p class="small text-muted mb-0">Preguntas frecuentes</p>
                            <p class="small text-muted mb-0">Libro de reclamaciones </p>
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">Más</h5>
                            <p class="small text-muted">Quiero ser partner</p>
                            <p class="small text-muted">Ver planes</p>
                            <p class="small text-muted">Centros</p>
                            <p class="small text-muted">Clases</p>
                            <p class="small text-muted">Planes corporativos</p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                        <button class="subTitle-button">SUGIERE UN CENTRO</button>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">¿Necesitas ayuda?</h5>
                            <i class="fas fa-mobile-alt"></i>
                            <p class="small text-muted">+51 941 399 209</p>
                            <i class="fab fa-facebook designIcon"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                            
                        </div>
                    </div>
                </div>
                <hr class="my-3"/>
                <p>©2021 Fitness Pass® Todos los derechos reservados.</p>
                <p>contacto@fitnesspass.pe</p>
            </footer>
            </div>
        )
    }


export {FooterDesk}
