/* eslint-disable */
// import logo from './logo.svg';
import './App.css';
// lazy 와 Suspense를 이용해서 불필요하게 한번에 import하는 걸 막을 수 있다.
import { useState, lazy, Suspense } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './style/style.scss';

import MainSlider from './components/main/MainSlider';
let Drinks = lazy(() => import('./components/drinks/Drinks'));
// import Drinks from './components/drinks/Drinks';
let Login = lazy(() => import('./components/header/Login'));
// import Login from './components/header/Login';

// alcohol icon들이 있는 곳.
// url parameter를 공부해야할거같움..??
const url = 'https://sinri0809.github.io/icandrinkdata.github.io/alcohol-icon/';
const alcohol_lst = [{
  name : "AMBER",
  type : "BEER",
  type_detail : "Amber ALE",
  abv : ["5.0", "15"],
  style : ["Malty", "Caramel", "Balanced"],
  infor : "Amber Beer is Craft Beer made from Galmegi Brewing Company. It tasted very deep and classic",
  file : 'beer_1_amber.svg'
},{
  name : "Blue Hawaii",
  type : "Cocktail",
  type_detail : "Sweet Cocktail",
  abv : ["Low", "Sweet"],
  style : ["Soda", "Pineapple", "Blue"],
  infor : "When you wanna drink, just pickme",
  file : 'cocktail_1_blueh.svg'
},{
  name : "Hazy IPA",
  type : "BEER",
  type_detail : "Hazy IPA",
  abv : ["?", "?"],
  style : ["Hoppy", "Haze", "Tropical"],
  infor : "When you wanna drink, just pickme",
  file : 'beer_1_hazy.svg'
},{
  name : "whiskey sour",
  type : "Cocktail",
  type_detail : "Sour Cocktail",
  abv : ["?", "?"],
  style : ["Lemon", "Sweet", "Flavour"],
  infor : "When you wanna drink, just pickme",
  file : 'cocktail_2_sourw.svg'
}
]
// const kakaoAPI = '4687a67faa4292cb07f10d69af26b874';

function App() {
  const [alcohols, setAlcohol] = useState(alcohol_lst)
  return (
    <div className="App" id="home">
      <header>
        <div className="container">
          <div className="top">
            <Link to='/' className="button-home">icandrink</Link>
            <input 
              className="search-pub"
              placeholder="nearby pub"
            />
            <nav>
              <Link to='/drinks'>Drinks</Link>
              <Link to='/'>Place</Link>
              <Link to='/'>Company</Link>
            </nav>
          </div>

          <div className="bottom">
            <button id="notice" className="material-icons">notifications</button>
            <button id="pubmark" className="material-icons">local_bar</button>
            <Link id="user-login" to="/user/login">login</Link>
            {/* <div className="user-profile"> */}
              {/* <span className="material-icons">face</span> */}
            {/* </div> */}
          </div>

        </div>

      </header>

      <Switch>
        <Route exact path="/">
          <MainSlider 
            alcohols={alcohols}
          />
        </Route>

        <Route path="/user/login">
          <Suspense fallback={<div>this is loading to login</div>}>
            <Login />
          </Suspense>
        </Route>

        <Route path="/drinks">
          <Suspense fallback={<div>this is loading to login</div>}>
            <Drinks
              alcohols={alcohols}
            />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;