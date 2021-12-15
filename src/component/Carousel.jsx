import React from "react";
import "../style/carousel.css"


const Carousel = () => {
  return (
    <>
      <section class="content-nine">
        <div
          id="carouselExampleSlidesOnly"
          class="
            carousel
            slide
            sw-container
            mx-auto
            d-flex
            justify-content-center
            align-items-center
            flex-wrap
        "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner text-center">
            <h5>Ellos ya empezaron por el cambio</h5>
            <div class="carousel-item active">
              <img
                class="blockElement m-3"
                src="https://image.fitnesspass.pe/fit-in/160x160/filters:quality(80)/img/fitness-pass-v2/testimonials/alejandra_v2.png"
              />
              <h6>
                Me encanta la libertad que Fitness Pass me da para programar mi
                día. ¡No me amarra a ningún centro y por eso me encanta!
              </h6>
              <p>Alejandra</p>
            </div>
            <div class="carousel-item">
              <img
                class="blockElement m-3"
                src="https://image.fitnesspass.pe/fit-in/160x160/filters:quality(80)/img/fitness-pass-v2/testimonials/johan_v2.png"
              />
              <h6>
                Con Fitness Pass Hago mucho más ejercicio que antes, ya no me
                aburro más
              </h6>
              <p>Johan</p>
            </div>
            <div class="carousel-item m-3">
              <img
                class="blockElement"
                src="https://image.fitnesspass.pe/fit-in/160x160/filters:quality(80)/img/fitness-pass-v2/testimonials/larisse_v2.png" alt=""
              />
              <h6>Con Fitness Pass encontré algo que realmente me acomoda</h6>
              <p>Larisse</p>
              <hr/>
            </div>
          </div>
        </div>
      </section>
      <section class="content-ten">
        <div
          class="d-flex justify-content-evenly align-items-center flex-wrap m-3"
        >
          <img className="img-6"
          
            src="https://image.fitnesspass.pe/filters:quality(60)/img/partners/clubelcomercio.png"
            alt="partner"
          />
          <img className="img-7"
            
            src="https://image.fitnesspass.pe/fit-in/300x200/filters:quality(60)/img/partners/BNPP_CARDIF_BL_N.jpg"
            alt="partner"
          />
          <img className="img-9"
            
            src="https://image.fitnesspass.pe/filters:quality(60)/img/partners/starup_peru_v4.png"
            alt="partner"
          />
          <img className="img-7"
            
            src="https://image.fitnesspass.pe/filters:quality(60)/img/partners/LVS_Logo.png"
            alt="partner"
          />
          <img className="img-7"
            
            src="https://image.fitnesspass.pe/fit-in/300x200/filters:quality(60)/img/partners/rimac.png"
            alt="partner"
          />
          <img
            
            src="https://image.fitnesspass.pe/fit-in/300x200/filters:quality(60)/img/partners/UniversidaddeLima_v2.png"
            alt="partner"
          />
          <img className="img-7"
            
            src="https://image.fitnesspass.pe/fit-in/300x200/filters:quality(60):grayscale()/img/partners/endeavor.jpg"
            alt="partner"
          />
          <img className="img-6"
            
            src="https://image.fitnesspass.pe/fit-in/300x200/filters:quality(60)/img/partners/ministerio_v4.png"
            alt="partner"
          />
        </div>
      </section>
    </>
  );
};

export { Carousel };
