import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import Linkedind from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
// import Vecto1 from '../../img/Vector1.png'
// import Vecto2 from '../../img/Vector2.png'
// import boy2 from '../../img/boy3.png'
import fotoperfil from '../../img/fotoperfil.png'

import thunbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
// import glassesimoji from '../../img/glassesimoji.png'
import Floatingdiv from '../FloatingDiv/Floatingdiv';



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
                    <a href="https://github.com/Josevargas1289"> <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/jose-vargas-arango/"><img src={Linkedind} alt="" /></a>
                    <a href="https://www.instagram.com/jose29d/"> <img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-rigth">
                <img className='imgperfil' src={fotoperfil} alt="" />
               
               
                {/* <img className='imgemoji' src={glassesimoji} alt="" /> */}
                
                <div style={{ top: '-4%', left: '68%' }}>
                    <Floatingdiv image={Crown} text1='Web' text2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '-1rem' }}>
                    <Floatingdiv image={thunbup} text1='Full Stack' />
                </div>
                {/* bluur divs */}
                <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
                <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-11rem'}}></div>
            </div>
        </div>
    );
};

export default Intro;