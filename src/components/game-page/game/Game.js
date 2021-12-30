
import React from 'react'
import CardGrid from '../card-grid/CardGrid';

function Game() {
  let ArrCards = [
    {CardID: "card1"},
    {CardID: "card1"},
    {CardID: "card2"},
    {CardID: "card2"},
    ]
    
    ArrCards =  ArrCards.map((Card)=>{return {...Card, key: Math.floor(Math.random() * 1000)}})
    
    return (
        <div>
          <CardGrid Cards = {ArrCards}/>
        </div>
      );
}

export default Game
