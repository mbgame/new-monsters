import React from 'react';
import './cardList.style.css';
import { Card } from '../card/card.component';

function CardList(props){
    const {monsters} = props;
    return(
        <div className='cardList'>
            {
                monsters.map((monster,index)=>(
                    <Card key={monster.id} monster={monster} />
                )

                )
            }
        </div>
    );
}

export {CardList};