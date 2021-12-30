import React from 'react'

function Card(props) {
  const name = {
    card1: 'cat1',
    card2: 'cat2'
  }


  const iamges = {
    card1: 'http://....',
    card2: 'http://other....'
  }

  function CardChoose(){
    props.Onclick(props.CardID)
  }

  return (
    <div style={{border: "3px solid black", width: "400px"}} onClick={CardChoose}>
      {name[props.CardID]}
      <hr/>
     {iamges[props.CardID]}
    </div>
  )
}

export default Card
