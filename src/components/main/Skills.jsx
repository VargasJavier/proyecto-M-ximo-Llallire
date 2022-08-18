import React from 'react';

import { motion } from 'framer-motion';

import maintenance from '../../assets/image/maintenance.png';
import working from '../../assets/image/working.png';
import shoppingCart from '../../assets/image/shoppingCart.png';


function Skills() {
    const images = [maintenance, working, shoppingCart];
    return (
        <div>
            <h2 className='color'>¡Un subtitulo para aquí!</h2>

                <p>Aprovecha esta sección para resaltar los beneficios de tu producto o servicio. Las palabras clave ayudan con el SEO.</p>            

                <div>
                    <motion.div className='slider-container'>
                        <motion.div className='slider' drag='x'
                         dragConstraints= {{right:153, left: -158}}>
                            <div>
                                <motion.div className='item'>
                                    <div className='container-img'>
                                        <img src={working} alt="" />
                                    </div>

                                    <div className='container-title-description'>
                                        <h3>Mantenimiento</h3>
                                        <p>
                                            Mantenimiento y actualizaciones de páginas web ya creadas.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div>
                                <motion.div className='item'>
                                    <div className='container-img'>
                                        <img src={maintenance} alt="" />
                                    </div>

                                    <div className='container-title-description'>
                                        <h3>Desarrollo Web</h3>
                                        <p>
                                            Realizamos desarrollo web a medida, altamente optimizado. Web estructuradas y web autodministrables.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <div>
                                <motion.div className='item'>
                                    <div className='container-img'>
                                        <img src={shoppingCart} alt="" />
                                    </div>

                                    <div className='container-title-description'>
                                        <h3>E-commerce</h3>
                                        <p>
                                            Creamos tu tienda online para potenciar tus ventas.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                
                </div>
                    
        
        </div>
    )
    }

export default Skills