
import React from 'react'
import Border from '../border/Border';
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
          <Border/>
          <hr/>
          <CardGrid Cards = {ArrCards}/>
        </div>
      );
}

export default Game
