import React from 'react'

function Welcome(props) {
  let CardsArr = [
    { CardID: "card1" },
    { CardID: "card1" },
    { CardID: "card2" },
    { CardID: "card2" },
    { CardID: "card3" },
    { CardID: "card3" },]

  CardsArr = CardsArr.map((Card) => { return { ...Card ,isClicked: false, key: Math.floor(Math.random() * 1000000) } })

  return (
    <div>
      <button onClick={()=> props.CardsInfo(CardsArr)}>start</button>

    </div>
  )
}

export default Welcome
