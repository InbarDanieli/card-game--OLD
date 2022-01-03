import React, { useState } from 'react'
import Card from '../card/Card'
import './CardGrid.css'


function CardGrid(props) {
  const [oneclicked, setOneclicked] = useState(false)
  const [FirstCard, setFirstCard] = useState("")
  const [FirstKey, setFirstKey] = useState()

  function ChooseCard(CardName, key) {
    if (oneclicked) {
      if (FirstKey !== key) { 
        if (FirstCard === CardName) {
          console.log("yesss");
        }
        else {
          console.log("nono");
        }
        setOneclicked(false)
      }
    } else {
      setFirstCard(CardName)
      setFirstKey(key)
      setOneclicked(true)
    }
  }

  let CardsArr = props.Cards
  CardsArr = CardsArr.map((event) => { return <Card CardID={event.CardID} key={event.key} Key={event.key} Onclick={ChooseCard} /> })
  CardsArr.sort((a, b) => a.key - b.key)

  return (<div className='grid'>{CardsArr}</div>)
}

export default CardGrid
