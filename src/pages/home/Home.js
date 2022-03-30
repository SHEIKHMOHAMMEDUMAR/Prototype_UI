import Drop from "../../components/drop/Drop"
import "./home.css"
import { useState } from "react";
import {userData} from "../../data";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
//import FeatureInfo1 from "../../components/featureInfo/FeatureInfo1";

const options = [
    {
      label: "Last 7 days",
      value : "7 days",
    },
    {
      label: "Last 1 month",
      value : "1 month",
    },
    {
      label: "Last 3 months",
      value : "3 months",
    },
    {
      label: "Last 6 months",
      value : "6 months",
    },
    {
      label: "Last 1 year",
      value : "1 year",
    },
  ];

let Home = () => {
    const [selected, setselected] = useState(options[0]);
    return (
        <div className="home">
            <Drop selected={selected} setselected={setselected} options={options}/>
            <FeatureInfo items = {userData.featureInfo} />
        </div>
    )
}
export default Home