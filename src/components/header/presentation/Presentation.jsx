import React from 'react';
import './../../../assets/scss/header/presentation.scss';

function Presentation() {
  return (
    <div className='presentation-container'>

        <div className='title-container'>

            <h1 className='presentation-title'>Hola! Soy <br /><span className='presentation-name'>Max Llallire</span></h1>
        </div>

        <div className='descripcion-container' >
            <p className='descripcion-presentation'>
                Un texto sobre tu producto o servicio. Explique por qué es valioso y dirija al usuario a la siguiente meta.
            </p>
        </div>
        <div className='button-container'>
            <button className='button-contacto'>
                <span>Contacto</span>
            </button>
        </div>

    </div>
  )
}

export default Presentation