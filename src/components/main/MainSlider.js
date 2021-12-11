/* eslint-disable */
import { useState, useEffect } from 'react';
import './../../style/main.scss';
import SliderCont from './SliderCont';

const MainSlider = ({alcohols}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let currentAlcohols = alcohols.slice(activeIndex, activeIndex+3);
  
  // https://sinri0809.notion.site/develope-not-3263e02ebe294216b08a4360876e8186
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [dragInit, setDragInit] = useState(0);
  const [wrapper, setWrapper] = useState({transform : 'translateX(0)'});

  // navigation 동작
  const [naviBar, setNaviBar] = useState({transform : 'translateX(0)'});
  // setState가 async하게 동작하기 때문에 이걸 못했던 거임 ㅠ
  useEffect(() => {
    return () => {
    }
  }, [window.innerWidth])


  useEffect(() => {
    setDragInit(dragInit+dragEnd-dragStart);
    setWrapper(updateIndex(dragStart, dragEnd, dragInit))
  }, [dragEnd])
  useEffect(() => {
    currentAlcohols = alcohols.slice(activeIndex, activeIndex+3);
    if(dragInit>0){
      setWrapper({transform : 'translateX(0)'});
      setDragInit(0);
    }
  }, [dragInit])
  // draggable true를 해줘야 drag할 수 있는걸로 인지함 😂
  return <main>
    <section className="container main-slider">
      <h2>Today's Recommends</h2>
      <div className="slider-container">
        <ul className="slider-wrapper" draggable={true} 
            onDragStart={(e) => setDragStart(e.pageX)}
            onDragEnd={(e) => setDragEnd(e.pageX)}
            style={wrapper}
        >
        {
          currentAlcohols.map((alcohol, index) => {
            return <SliderCont key={index} 
              alcohol={alcohol} 
              index={index}
              activeIndex={activeIndex}
            />
          })
        }
        </ul>
      </div>
      <div className="slider-navigation"
        onClick={(e) => {
          let navi = document.querySelector('.slider-navigation').clientWidth;
          let percent = parseInt((e.nativeEvent.offsetX/navi)*100);
          // console.warn(parseInt((e.nativeEvent.offsetX/navi)*100));
          if(percent>37&&percent<=66){
            setNaviBar({transform : 'translateX(100%)'});
            setActiveIndex(1)
          }else if(percent>66){
            setNaviBar({transform : 'translateX(200%)'})
            setActiveIndex(2)
          }else{
            setNaviBar({transform : 'translateX(000%)'})
            setActiveIndex(0)
          }
        }}>
        <span className="navigation-bar" draggable={true} style={naviBar} // 100%씩 늘리면 됨
          onDragStart={(e) => {
            console.log(e)
          }}
        ></span>
      </div>
    </section>
  </main>
}

const updateIndex = (x_2n1, x_2n, x_i) => {
  return {transform : `translateX(${x_i + x_2n - x_2n1}px)`};
}
export default MainSlider;
// addEventListener 

  // const [activeArray, setActiveArray] = useState();
  // scroll evenet를 통해서 index를 가져와서 배열을 2개로 잘라 버리기?

  // useEffect(() => {
  //   const wrapper = document.querySelector('.slider-wrapper');
  //   const slideCont = document.querySelectorAll('.slider-wrapper > li')

  //   slideCont.forEach((item) => {
  //     // 얘는 시간에 따라서 drag를 확인하는 구나
  //     // item.addEventListener('drag', (e) => console.log("drag"));
  //     item.addEventListener('dragstart', (e) => console.log(`dragstart : ${e.layerX}`));
  //     item.addEventListener('dragend', (e) => console.error(`dragend : ${e.layerX}`));
  //   });
    
  //   return () => {
  //     slideCont.forEach((item) => {
  //       // 얘는 시간에 따라서 drag를 확인하는 구나
  //       // item.removeEventListener('drag', (e) => console.log(""));
  //       item.removeEventListener('dragstart', (e) => console.log(``));
  //       item.removeEventListener('dragend', (e) => console.error(""));
  //     });
  //   }
  // }, [])
  // console.log(document.querySelector('.slider-container'));
