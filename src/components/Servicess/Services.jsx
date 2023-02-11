import React from 'react';
import '../Servicess/Services.css'
import HeartEmogie from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import cv from '../Servicess/Cv.pdf'
import CardServices from '../Cards/CardServices';


const Services = () => {
    return (
       
        <div className="services" id='servicios'>
            {/* left side */}
            <div className="awesome">
                <span>Mis</span>
                <span>Servicios</span>
                <span>
                    Ofrezco servicios de desarrollo front-end con experiencia
                    <br /> en React, HTML, CSS y JavaScript. Mi habilidad de aprendizaje
                    <br />
                    me permite adaptarme rápidamente a nuevas tecnologías.
                    <br />
                    Mi objetivo es brindar soluciones únicas y eficientes a los desafíos
                    <br /> del cliente.
                </span>

                <a href={cv} download>
                    <br />
                    
                    <button className="button s-button btn-download">Download CV</button>
                </a>
                
            </div>
            {/* rigth side */}
            <div className="cards">
                {/* firts-card */}
                <div style={{ right: '7rem', top: '5rem' }}>
                    <CardServices
                        emoji={HeartEmogie}
                        Heading={'Desing'}
                        detail={'Figma,  Canva, Photoshop'} />
                </div>
                {/* secon-card */}

                <div style={{ top: '-3rem', left: '7rem' }}>
                    <CardServices
                        emoji={Glasess}
                        Heading={'Developer'}
                        detail={'HTML, CSS, JavaScript, React'} />

                </div>

                {/* thir-card */}

                <div style={{ top: '13rem', left: '7rem' }}>
                    <CardServices
                        emoji={Humble}
                        Heading={'UI/UX'}
                        detail={'Investigacion, Diseño, Evaluacion'} />

                </div>
             
            </div>
         
        </div>
    
    );
};

export default Services;