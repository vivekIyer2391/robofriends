import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
// import Cardlist from "./components/Cardlist";
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App  from "./containers/App";
import { searchRobots } from "./reducers";
import {robots} from "./robots";

const store =createStore(searchRobots);

ReactDOM.render(<App store={store}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
