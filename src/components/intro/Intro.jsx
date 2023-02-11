import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import Linkedind from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
// import Vecto1 from '../../img/Vector1.png'
// import Vecto2 from '../../img/Vector2.png'
// import boy2 from '../../img/boy3.png'
import fotoperfil from '../../img/fotoperfil.png'

// import thunbup from '../../img/thumbup.png'
// import Crown from '../../img/crown.png'
// import glassesimoji from '../../img/glassesimoji.png'
// import Floatingdiv from '../FloatingDiv/Floatingdiv';



const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">

                    <span>Hola! soy</span>
                    <span>Jose Vargas</span>
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
            
            
        </div>
    );
};

export default Intro;