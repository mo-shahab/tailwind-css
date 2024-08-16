import { useState } from "react";
import "./App.css";
import FlexBox from "./FlexBox";
import Grid from "./Grid";

function App() {
  const [view, setView] = useState("grid");

  const handleGridClick = () => {
    setView("grid");
  };
  const handleFlexClick = () => {
    setView("flex");
  };

  return (
    <>
      <div className="grid grid-flow-col justify-center gap-4">
        <button onClick={handleGridClick} className="bg-blue-500 rounded p-2">
          View Grids
        </button>
        <button onClick={handleFlexClick} className="bg-blue-500 rounded p-2">
          View Flexbox
        </button>
      </div>
      {view === "grid" ? <Grid></Grid> : <FlexBox></FlexBox>}
    </>
  );
}

export default App;
