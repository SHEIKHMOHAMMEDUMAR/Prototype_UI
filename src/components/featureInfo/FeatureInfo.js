import "./featureInfo.css"
import { useState } from "react";

let FeatureInfo = ({items}) => {
  const [item] = useState(items);
    return (
    <div className="featured">
        {item.map((i)=>(
            <div className="featuredItem">
                <span className="featuredMoney">{i.data}</span>
                <span className="featuredTitle">{i.title}</span>
            </div>
        ))}
    </div>
    )
}
export default FeatureInfo;