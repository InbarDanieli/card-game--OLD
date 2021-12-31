import React, { useState, useEffect } from 'react'
import AboutPage from '../../aboutpage/AboutPage';
import Game from '../game-page/game/Game';
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
      case '/game':
        Child = Game;
        break;

        case '/about':
        Child = AboutPage;
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
