import React, { useState, useEffect } from 'react'
import CardGame from '../card-game/CardGame';
import HomePage from '../HomePage/HomePage';

function Router() {
  const [route, setRoute] =
    useState(window.location.hash.substr(1));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    })
  }, []);
  let Child;

  function getChild() {
    switch (route) {
      case '/blops':
        Child = CardGame;
        break;

      default:
        Child = HomePage;
    }
  }

  return (
    <div>
      {getChild()}
      <Child />
    </div>)
}

export default Router
