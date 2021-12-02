/* eslint-disable */
import { useState } from "react";
import axios from "axios";



const SliderCont = ({alcohol, index}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(alcohol.abv)

  return <div className={"slider-cont "+ (activeIndex === index?"--active":null)}>
    
    <div className="left alcohol-visual">
      <h4>{alcohol.name}</h4>
      <img src={`https://sinri0809.github.io/icandrinkdata.github.io/alcohol-icon/${alcohol.file}`}
        alt="alcohol"
      />
    </div>

    <div className="mid">
      <h5>{alcohol.type_detail}</h5>
      <div className="alcohol-abv">
        <p>
          <b>ABV</b>
          <span>{alcohol.abv[0]}%</span>
        </p>
        <p>
          <b>IBU</b>
          <span>{alcohol.abv[1]}</span>
        </p>
      </div>
      <div className="alcohol-style">
        {
          alcohol.style.map((item, index) => {
            return <div key={index} className="style-item">
              {item}
            </div>
          })
        }
      </div>
      <p className="alcohol-infor">{alcohol.infor}</p>
    </div>

    <div className="right">
      <button className="material-icons add-card">local_bar</button>
      <p>{alcohol.type}</p>
    </div>

  </div>
}

export default SliderCont;