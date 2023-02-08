import React from 'react';
import '../navbar/nav-bar.css'

const NavBar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-lef">
                <div className="n-name">Jose</div>
                <span>toggle</span>
            </div>
            <div className="n-rigth">
                <div className="n-list">
                    <ul>
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Habilidades</li>
                        <li>Portafolio</li>
                        {/* <li>Testimonio</li> */}
                    </ul>
                </div>
                <button className='button n-button'>
                    
                    Contact

                </button>
            </div>
        </div>
    );
};

export default NavBar;