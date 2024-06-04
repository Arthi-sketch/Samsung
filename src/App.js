import "./App.css";
import { useState } from "react";
// import axios from "axios";

function App() {
  var num = [],
    val = 6;
  for (let i = 1; i <= val; i++) num.push(i);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [count, setCount] = useState(1);

  const [pRes1, setPRes1] = useState(0);
  const [pRes2, setPRes2] = useState(0);
  const [res, setRes] = useState(0);

  function rollDice() {
    if (count == 10) {
      pRes1 > pRes2
        ? setRes("Player 1 won: " + pRes1)
        : setRes("Player 2 won: " + pRes2);
    }
    setCount(count + 1);
    let val = Math.floor(Math.random() * 6) + 1;
    setPRes2(pRes1 + val);
    setPlayer2(val);

    val = Math.floor(Math.random() * 6) + 1;
    setPRes1(pRes2 + val);
    setPlayer1(val);
  }

  return (
    <div className="App" style={{ color: "red" }}>
      <div className="dice">
        {num.map((val) => (
          <span className="dot"> </span>
        ))}
      </div>

      {res == "" && (
        <>
          <p>Player 1 dice: {player1}</p>
          <p>Player 2 dice: {player2}</p>
          <button onClick={rollDice}>roll</button>
        </>
      )}
      {res !== "" && <p>Result: {res}</p>}
    </div>
  );
}

export default App;
