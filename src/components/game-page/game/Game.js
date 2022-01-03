
import React, { useEffect, useState } from 'react'
// import Border from '../border/Border';
import CardGrid from '../card-grid/CardGrid';
import Welcome from '../welcome/Welcome';

function Game(props) {
  const [oneclicked, setOneclicked] = useState(false)
  const [FirstCard, setFirstCard] = useState("")
  const [FirstKey, setFirstKey] = useState()
  const [cards, setCards] = useState([])


  function chooseCard(cardId, cardName,) {
    if (oneclicked) {
      if (FirstKey !== cardId) {
        if (FirstCard === cardName) {
          console.log("yesss");
        }
        else {
          console.log("nono");
        }
        setOneclicked(false)
      }
    } else {
      setFirstCard(cardName)
      setFirstKey(cardId)
      setOneclicked(true)
    }
  }

  return (
    <div>
      {!cards.length ? <Welcome CardsInfo={(info) => setCards(info)} /> : <CardGrid Cards={cards} onClick={chooseCard} />}
    </div>
  );
}

export default Game
