import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Redux
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// let userCards = [];
// function addCard(state = userCards, action){
//   if(action.type === "addMyCard"){
//     // card를 추가했을 때,
//     // userCards 배열에 값 추가함.

//   }
//   return state;
// }
// let user = createStore(addCard, userCards);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* <Provider user={user}> */}
        <App />
      {/* </Provider> */}

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
