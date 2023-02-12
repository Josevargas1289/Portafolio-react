import React from 'react';
import '../Servicess/Services.css'
import HeartEmogie from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import cv from '../Servicess/cv-Jose-Vargas-Arango.pdf'
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
                        detail={'Incorporar  tecnologías como HTML, Css y Boostrap para crear diseños increibles, o hacer visible tu modelo de negocio en una pagina web'} />
                </div>
                {/* secon-card */}

                <div style={{ top: '-3rem', left: '7rem' }}>
                    <CardServices
                        emoji={Glasess}
                        Heading={'Developer'}
                        detail={'Integrar a los diseños web tecnologías como JavaScript, React, Redux, NodeJs, entre otras, para darle funcionalidades unicas a cualquier pagina o modelo de negocio  '} />

                </div>

                {/* thir-card */}

                <div style={{ top: '13rem', left: '7rem' }}>
                    <CardServices
                        emoji={Humble}
                        Heading={'UI/UX'}
                        detail={'Investigación, Diseño, y evaluación de  nuevas tecnologías que agilicen y enriquezcan los servicios que se puedan brindar par dar solución a un problema o cubrir una necesidad'} />

                </div>
             
            </div>
         
        </div>
    
    );
};

export default Services;