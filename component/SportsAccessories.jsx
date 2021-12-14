import React from 'react'
import "../style/sportsaccesories.css"

const SportsAccessories=()=>{
        return (
          <>
        <div className="d-flex justify-content-center text-left align-items-center column-reverse-mobile m-4 p-4 box-container-3">
        <div className="box-text">
          <h4 className="health-title">Accesorios deportivos</h4>
          <p className="health-p">Lleva tus rutinas a otro nivel y encuentra todo lo que necesitas para entrenar en casa.</p>
          <button className="btn-health">DESCUBRE THE FITNESS PASS SHOP</button>
        </div>
        <div className="box-img">
          <img className="img-health" src="https://image.fitnesspass.pe/fit-in/500x570/filters:quality(90)/img/fitness-pass-v2/life/everything.png" alt="health1" />
        </div>
      </div>
          </>
        )
    }

export {SportsAccessories}
