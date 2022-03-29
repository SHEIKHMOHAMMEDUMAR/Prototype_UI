import "./styles.css";
import { useState } from "react";
import Drop from "./drop";

let App=() =>{
  const [selected, setselected] = useState("");
  return (
    <div className="App">
      <Drop selected={selected} setselected={setselected} />
    </div>
  );
}
export default App;