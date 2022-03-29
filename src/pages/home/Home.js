import Drop from "../../components/drop/Drop"
import "./home.css"
import { useState } from "react";
import {userData} from "../../data";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";

let Home = () => {
    const [selected, setselected] = useState("");
    return (
        <div className="home">
            <Drop selected={selected} setselected={setselected} />
            <FeatureInfo items={userData.featureInfo} />
        </div>
    )
}
export default Home