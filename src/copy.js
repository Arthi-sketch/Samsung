import "./App.css";
import { useState } from "react";
// import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [arr, setArr] = useState([]); //read
  const [dispArr, setDispArr] = useState([]); //search
  const [flag, setFlag] = useState(0);
  const [storeKeys, setStoreKeys] = useState([]);

  function submitHandler() {
    setFlag(0);
    var x = [];
    x.push(...arr, userInput);
    setArr([...x]);
  }

  function searchHandler() {
    if (userInput == "") {
      setFlag(0);
      return;
    }
    setFlag(1);
    var x = [];
    arr.map((value) => {
      if (value.includes(userInput)) {
        x.push(value);
        setDispArr([...x]);
      }
    });
    if (x.length == 0) setDispArr(["No Data found"]);
  }

  function changeColor(id) {
    var x=[...storeKeys, id];
    setStoreKeys([...x])
  }
  return (
    <div className="App" style={{ color: "red" }}>
      {/* create */}
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={submitHandler}>Add</button>

      {/* search */}
      <button onClick={searchHandler}>search</button>

      {/* read mode flag=0 */}
      {arr.length > 0 &&
        flag === 0 &&
        arr.map((value, key) => (
          <div id={key}>
            <span style={{ color: storeKeys.includes(key) ? "green" : "red" }}>{value}</span>
            <button onClick={()=>changeColor(key)}>setColor</button>
          </div>
        ))}

      {/* searchmode flag=1 */}
      {dispArr.length > 0 &&
        flag === 1 &&
        dispArr.map((value, key) => <div id={key}>{value}</div>)}
    </div>
  );
}

export default App;
