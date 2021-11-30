/* eslint-disable */
// import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import './style/style.scss';

// alcohol icon들이 있는 곳.
// url parameter를 공부해야할거같움..??
const url = 'https://sinri0809.github.io/icandrinkdata.github.io/alcohol-icon/';
const url_amber = 'https://sinri0809.github.io/icandrinkdata.github.io/alcohol-icon/beer_1_amber.svg';

function App() {
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
              <Link to='/'>Drinks</Link>
              <Link to='/'>Place</Link>
              <Link to='/'>Company</Link>
            </nav>
          </div>

          <div className="bottom">
            <span className="material-icons">notifications</span>
            <span className="material-icons">local_bar</span>
            <div className="user-profile">
              {/* <span className="material-icons">face</span> */}
            </div>
          </div>

        </div>

      </header>

      <Switch>
        <Route exact path="/">
          main page recomm
        </Route>


      </Switch>


    </div>
  );
}

export default App;
