import React from 'react';
import '../Cards/Car.css'

const Card = ({ emoji, Heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{Heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>

        </div>
    );
};

export default Card;