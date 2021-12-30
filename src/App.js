import './App.css';
import CardGrid from './components/game-page/card-grid/CardGrid';
// import Router from './components/Router/Router';

function App() {
let ArrCards = [
{CardID: "card1"},
{CardID: "card1"},
{CardID: "card2"},
{CardID: "card2"},
]

ArrCards =  ArrCards.map((Card)=>{return {...Card, key: Math.floor(Math.random() * 1000)}})

return (
    <div className="App">
  {/* <Router/> */}
  <CardGrid Cards = {ArrCards}/>
    </div>
  );
}
export default App;
