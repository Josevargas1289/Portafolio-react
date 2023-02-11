import React from 'react';
import '../Cards/Car.css'

const CardServices = ({ emoji, Heading, detail }) => {
    return (
        <div className="card-portafolio" >
            <img src={emoji} alt="" />
            <span>{Heading}</span>
            <span>{detail}</span>
            

        </div>
    );
};

export default CardServices;