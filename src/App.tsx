import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  return (
    <div className="App">
      {cells.map((cell) => (
        <div className="cell">{cell}</div>
      ))}
    </div>
  );
}

export default App;
