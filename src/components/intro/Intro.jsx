import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import Linkedind from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import fotoperfil from '../../img/fotoperfil.png'

//animaciones 

import Fade  from "react-reveal/Fade"





const Intro = () => {
    return (
        <div className="intro">
            
            <Fade  top duration ={3000} cascade>

            <div className="i-left">
                <div className="i-name">

                    <span>Hola! soy</span>
                    <span>José Vargas</span>
                    <span>
                    Desarrollador web full-stack altamente capacitado en la creación de experiencias de usuario atractivas y eficientes. Mi flexibilidad me permite trabajar en proyectos de diversa naturaleza y adaptarme rápidamente a nuevas tecnologías. Valoro el trabajo en equipo y siempre estoy dispuesto a colaborar para lograr los objetivos comunes. Con mi dedicación y pasión por el desarrollo web, puedo asegurar resultados sobresalientes en cada proyecto en el que participo.
                    </span>
                </div>
    
                <div className="i-icons">
                    <a href="https://github.com/Josevargas1289" target='blank'> <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/jose-vargas-arango/" target='blank'><img src={Linkedind} alt="" /></a>
                    <a href="https://www.instagram.com/jose29d/" target='blank'> <img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-rigth" >
                <img className='imgperfil' src={fotoperfil} alt="" />
            </div>
            </Fade>
            
        </div>
    );
};

export default Intro;