import "./App.css";
import CardDisplay from "./components/CardDisplay";
import Modebtn from "./components/Modebtn";
import data from "./incoherent.json";
import { useState} from "react";

function App() {
  let gibber = data.gibberish;
  let oneWord = data.oneword;
  let weird = data.weird;

  const [mode, setMode] = useState("Click a Mode");
  const [cardType, setCardType] = useState(gibber);

  const [num, setNum] = useState(0);

  function rePick() {
    setNum(Math.round(Math.random() * (cardType.length - 1)));
  }

  let homophone = cardType[num].homophone;
  let word = cardType[num].word;

  //function to change card types
  function changeGib() {
    setNum(Math.round(Math.random() * (gibber.length - 1)))
    setCardType(gibber);
    setMode("Current Mode: Gibberish");
  }
  function changeOne() {
    setNum(Math.round(Math.random() * (oneWord.length - 1)));
    setCardType(oneWord);
    setMode("Current Mode: One Word");
  }
  function changeWeird() {
    setNum(Math.round(Math.random() * (weird.length - 1)));
    setCardType(weird);
    setMode("Current Mode: Weird");
  }

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-header">
          <h1>
            {mode}
          </h1>
        </div>
        <div className="App-buttons">
          <Modebtn mode="Gibberish" clicked={changeGib} />
          <Modebtn mode="One Word" clicked={changeOne} />
          <Modebtn mode="Weird" clicked={changeWeird} />
        </div>
        <CardDisplay front={homophone} back={word} />
        {/* <Modebtn mode="Another Card" clicked={rePick} /> */}
      </div>
    </div>
  );
}

export default App;
