import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const changeCellContentValue = (value: string, index: number) => {
    //Loop through old cells array, match selected index with array index and replace value
    setCells((prevCellsArray) =>
      prevCellsArray.map((cell, i) => (i === index ? value : cell))
    );
  };

  const onPlusClicked = (index: number) => {
    setCells((prevCellsArray) => [
      ...prevCellsArray.slice(0, index + 1),
      "_",
      ...prevCellsArray.slice(index + 1),
    ]);
  };

  return (
    <main className="App">
      <div className="cell-container">
        {cells.map((cell, index) => (
          <div key={index} className="cell">
            <input
              onChange={(e) =>
                changeCellContentValue(e.currentTarget.value, index)
              }
              value={cell}
            />
            {index < cells.length - 1 && (
              <span onClick={() => onPlusClicked(index)}>+</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
