/* eslint-disable */
import { useState } from 'react';
import './main.scss';
import SliderCont from './SliderCont';

const MainSlider = ({alcohols}) => {
  const [scroll, setScroll] = useState(document.querySelector('.slider-container'))
  const [navi, setNavi] = useState(document.querySelector('.slider-navigation'))

  console.log(scroll)
  console.log(navi)

  return<main>
    <section className="container">
      <h2>Today's Recommends</h2>

      <div className="slider-container">
        <div className="slider-wrapper">
          {
            alcohols.map((alcohol, index) => {
              return <SliderCont key={index} alcohol={alcohol} index={index}/>
            })
          }

        </div>
      </div>
      <div className="slider-navigation">
        <span className="navigation-bar"></span>
      </div>
    </section>
  </main>
}

export default MainSlider;