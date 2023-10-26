import React from 'react';
import './card.style.css';

const Card = (props) => {
    const {monster} = props;

    return(
        <div className='card'>
            <img src='' alt="monster" />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export {Card};