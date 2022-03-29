import "./styles.css";
import { useState } from "react";
import Drop from "./drop";
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
//import {userData} from "./data"

let App=() =>{
  const [selected, setselected] = useState("");
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <Drop selected={selected} setselected={setselected} />
    </div>
  );
}
export default App;