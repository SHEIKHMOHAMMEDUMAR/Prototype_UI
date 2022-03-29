import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Drop from "./drop";
import "./App.css";
import { useState } from "react";
//import {userData} from "./data"

let App=() =>{
  const [selected, setselected] = useState("");
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Drop selected={selected} setselected={setselected} />
    </div>
  );
}
export default App;
