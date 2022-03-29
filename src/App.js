import "./styles.css";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Drop from "./drop";
//import {userData} from "./data"

let App=() =>{
  const [selected, setselected] = useState("");
  return (
    <div className="App">
      <Topbar />
      <Drop selected={selected} setselected={setselected} />
      <Sidebar />
    </div>
  );
}
export default App;