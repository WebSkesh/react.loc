import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <h2>Test code</h2>,
  document.getElementById('fieldToShow')
);
