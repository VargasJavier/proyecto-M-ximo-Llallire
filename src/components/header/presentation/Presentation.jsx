import React from 'react';
import perfil from './../../../assets/image/perfil.png';
import esfera from './../../../assets/image/esfera.png';

function Presentation() {

  return (
    <div className='presentation-container'>

        <div className='title-container'>

        {/* client title */}
            <h1 className='presentation-title'>Hola! Soy <br /><span className='presentation-name'>Max Llallire</span></h1>
        </div>
        {/* client description  */}
        <div className='descripcion-container' >
            <p className='descripcion-presentation'>
                Un texto sobre tu producto o servicio. Explique por qué es valioso y dirija al usuario a la siguiente meta.
            </p>
        </div>
        {/*  contact button */}
        <div className='button-container'>
            <button className='button-contacto'>
                <span>Contacto</span>
            </button>
        </div>

        {/* customer profile picture */}
            <div className='presentation-color'>
                <p>hola</p>
            </div>
        <div className='container-image'>
                <img className='presentation-image' src={perfil} alt='presentation' />
                <img className='presentation-esfera' src={esfera} alt='esfera' />
        </div>
            

    </div>
  )
}


export default Presentation;