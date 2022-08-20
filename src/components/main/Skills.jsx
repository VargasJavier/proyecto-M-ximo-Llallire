import React from 'react';

import { motion } from 'framer-motion';

import maintenance from '../../assets/image/maintenance.png';
import working from '../../assets/image/working.png';
import shoppingCart from '../../assets/image/shoppingCart.png';
import vector from '../../assets/image/vector.png';

function Skills() {
    const imagenes = [
        {
            id: 1,
            image: working,
            title: 'Mantenimiento',
            parrafo: 'Mantenimiento y actualizaciones de páginas web ya creadas.',
        },
        {
            id: 2,
            image: maintenance,
            title: 'Desarrollo-Web',
            parrafo: ' Realizamos desarrollo web a medida, altamente optimizado. Web estructuradas y web autodministrables.',
        },
        {
            id: 3,
            image: shoppingCart,
            title: 'E-commerce',
            parrafo: 'Creamos tu tienda online para potenciar tus ventas.',
        }
    ];

    return (
        <div>
            <h2 className='title-major'>¡Un subtitulo para aquí!</h2>

            <p className='description-major'>Aprovecha esta sección para resaltar los beneficios de tu producto o servicio. Las palabras clave ayudan con el SEO.</p>

            <motion.div className='slider-container'>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 360, left: -347 }}>

                    {
                        imagenes.map((imagen) => (
                            <motion.div key={imagen.id} className='item'>
                                <img src={imagen.image} alt={imagen.title} className='container-img' />
                                <div className='conteiner-title-description'>

                                    <h3 className='title-skills'>{imagen.title}</h3>
                                    <p className='parrafo-skills'>{imagen.parrafo}</p>
                                </div>
                                <button>
                                    <img src={vector} alt="vector" className='vector-skills' />
                                </button>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Skills