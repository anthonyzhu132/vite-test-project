import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const changeCellContentValue = (value: string, index: number) => {
    //Loop through old cells array, match selected index with array index and replace value
    setCells((prevCellsArray) => prevCellsArray.map((cell, i) => (i === index ? value : cell)))
  };

  return (
    <main className="App">
      <div className="cell-container">
        {cells.map((cell, index) => (
          <div key={index} className="cell">
            <input
              onChange={(e) => changeCellContentValue(e.currentTarget.value, index)}
              value={cell}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
