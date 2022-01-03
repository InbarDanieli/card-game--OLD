import React from 'react'
import Card from '../card/Card'
import './CardGrid.css'


function CardGrid(props) {

  const CardsArr = props.Cards.map((event) => {return <Card FlipCard={event.CardFlip} CardID={event.CardID} key={event.key} Key={event.key} Onclick={props.onClick} /> })
  CardsArr.sort((a, b) => a.key - b.key)

  return (<div className='grid'>{CardsArr}</div>)
}

export default CardGrid
