/* eslint-disable */
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './style/style.scss';

import MainSlider from './components/main/MainSlider';
import Drinks from './components/drinks/Drinks';

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
}]


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
            <div className="user-profile">
              {/* <span className="material-icons">face</span> */}
            </div>
          </div>

        </div>

      </header>

      <Switch>
        <Route exact path="/">
          <MainSlider 
            alcohols={alcohols}
          />
        </Route>

        <Route path="/drinks">
          <Drinks
            alcohols={alcohols}
          />
        </Route>


      </Switch>


    </div>
  );
}

export default App;
