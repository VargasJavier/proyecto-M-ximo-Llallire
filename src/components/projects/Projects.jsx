import React from 'react';

import { motion } from 'framer-motion';

import maintenance from '../../assets/image/maintenance.png';
import working from '../../assets/image/working.png';
import shoppingCart from '../../assets/image/shoppingCart.png';
import vector from '../../assets/image/vector.png';

function Projects() {
    const image = [
        {
            id: 2,
            image: maintenance,
            title: '',
            parrafo: 'Completar con el proyecto',
        },
        {
            id: 1,
            image: working,
            title: '',
            parrafo: 'Completar con el proyecto',
        },
        {
            id: 3,
            image: shoppingCart,
            title: '',
            parrafo: 'Completar con el proyecto',
        }
    ];

    return (
        <div id='skills'>
            <h2 className='title-major'>Mis proyectos destacados</h2>

            <p className='description-major'>Algunos de mis trabajos realizados.</p>

            <motion.div className='slider-container'>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 360, left: -347 }}>

                    {
                        image.map((imagen) => (
                            <motion.div key={imagen.id} className='item'>
                                <img src={imagen.image} alt={imagen.title} className='container-img' />
                                <div className='conteiner-title-description'>

                                    <h3 className='title-skills'>{imagen.title}</h3>
                                    <p className='parrafo-skills'>{imagen.parrafo}</p>
                                
                                    <img src={vector} alt="vector" className='vector-skills' />
                                
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Projects