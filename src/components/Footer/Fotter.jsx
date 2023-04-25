import React from "react";
import '../Footer/Fotter.css'
import Wave from '../../img/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import  Zoom  from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <div className="footer">
            <Zoom bottom cascade duration={3000}>
            <img className="wabe-img" src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>Joseroberto-vargas@hotmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/jose29d/" target='blank'>
                        <Insta color="white" size={"3rem"} />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-vargas-arango/" target='blank'>
                        <Linkedin color="white" size={"3rem"} />
                    </a>
                    <a href="https://github.com/Josevargas1289" target='blank' >
                        <Gitub color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default Footer;