import "./featureInfo.css"
import { useState } from "react";

let FeatureInfo = ({items}) => {
  const [item] = useState(items);
    return (
    <div className="featured">
        {item.map((i)=>(
            <div className="featuredItem">
                <div className="sub">{i.sub}{i.title} </div> 
                <div className="featuredMoney">{i.data} </div>
            </div>
        ))}
    </div>
    )
}

export default FeatureInfo;