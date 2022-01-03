import React from 'react'
import "./Card.css"

function Card(props) {
  const name = {
    card1: 'cat1',
    card2: 'cat2'
  }


  const iamges = {
    card1: 'http://....',
    card2: 'http://other....'
  }

  function ClickHendler(){
    props.Onclick(props.Key, props.CardID)
  }

  return (
    <div className={`card`} onClick= {ClickHendler}>
      <div className={`card-inner`}>
        
        <div className="card-front">
          {name[props.CardID]}
          <hr />
          {iamges[props.CardID]}
        </div>

        <div className="card-back">back</div>

      </div>
    </div>
  )
}

export default Card
