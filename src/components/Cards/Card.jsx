import React from 'react';
import '../Cards/Car.css'

const Card = ({ emoji, Heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{Heading}</span>
            <span>{detail}</span>
            <button className="c-button"><i class='bx bxs-alarm-add bx-md'></i></button>

        </div>
    );
};

export default Card;