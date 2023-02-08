import React from 'react';
import '../Servicess/Services.css'
import HeartEmogie from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card';


const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>All</span>
                <span>Services</span>
                <spane>
                Ofrezco servicios de desarrollo front-end con experiencia
                <br /> en React, HTML, CSS y JavaScript. Mi habilidad de aprendizaje
                <br />
                me permite adaptarme rápidamente a nuevas tecnologías.
                <br />
                Mi objetivo es brindar soluciones únicas y eficientes a los desafíos 
                <br /> del cliente.
                </spane>

                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* rigth side */}
            <div className="cards">
                {/* firts-card */}
                <div style={{ left: '12rem' }}>
                    <Card
                        emoji={HeartEmogie}
                        Heading={'Desing'}
                        detail={'Figma,  Canva, Photoshop'} />
                </div>
                {/* secon-card */}

                <div style={{top: '18rem', left: '-4rem'}}>
                <Card
                        emoji={Glasess}
                        Heading={'Developer'}
                        detail={'HTML, CSS, JavaScript, React'} />

                </div>

                 {/* thir-card */}

                 <div style={{top: '21rem', left: '12rem'}}>
                <Card
                        emoji={Humble}
                        Heading={'UI/UX'}
                        detail={'Investigacion, Diseño, Evaluacion'} />

                </div>

            </div>
        </div>
    );
};

export default Services;