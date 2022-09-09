import React from 'react';
import perfil from './../../../assets/image/perfil.png';
// import esfera from './../../../assets/image/esfera.png';
import pdf from './../../../assets/cv/cv-maximo.pdf'
function Presentation() {

  return (
    <div id='presentacion' className='presentation-container'>
        <div>

        <div className='title-container'>

        {/* client title */}
            <h1 className='presentation-title'>Hola! <br />Soy <span className='presentation-name'>Max Llallire</span></h1>
        </div>
        {/* client description  */}
        <div className='descripcion-container' >
            <p className='descripcion-presentation'>
            Frontend Developer. Entusiasta de la informática, la lógica y la filosofía. Apasionado por el desarrollo.
            </p>
        </div>
        {/*  contact button */}
        <div className='button-container'>
            <button className='button-contacto'>
                <a href="#contact"><span>Contactame</span></a>
            </button>
            <button className='download-cv'>
                <a href={pdf} target='_blank' rel='noopener noreferrer' download='Cv-Maximo-Llallire' > <span>Descargar mi CV</span></a>
            </button>
        </div>
        </div>

        {/* customer profile picture */}
            <div className='presentation-color'>
                
            </div>
        <div className='container-image'>
                <img className='presentation-image' src={perfil} alt='presentation' />
                {/* <img className='presentation-esfera' src={esfera} alt='esfera' /> */}
        </div>
            

    </div>
  )
}


export default Presentation;