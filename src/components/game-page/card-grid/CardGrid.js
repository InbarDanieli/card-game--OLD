import React, { useState } from 'react'
import Card from '../card/Card'
import './CardGrid.css'


function CardGrid(props) {
  const [oneclicked, setOneclicked] = useState(false)
  const [FirstCard, setFirstCard] = useState("")

  function ChooseCard(e) {
    if (oneclicked) {
      if (FirstCard === e) {
        console.log("yesss");
      }
      else
      {
        console.log("nono");
      }
      setOneclicked(false)
    }

    else {
      setFirstCard(e)
      setOneclicked(true)
    }
  }

  let CardsArr = props.Cards
  CardsArr = CardsArr.map((event) => { return <Card CardID={event.CardID} key={event.key} Onclick={ChooseCard} /> })
  CardsArr.sort((a, b) => a.key - b.key)

  return (<div className='grid'>{CardsArr}</div>)
}

export default CardGrid
