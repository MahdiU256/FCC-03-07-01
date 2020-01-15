import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "core-js/stable";
import "regenerator-runtime/runtime";
import store from './store/index.js';
import QuoteBox from './containers/QuoteBox.jsx';

const wrapper = document.getElementById('quote-box');
wrapper ? ReactDOM.render(
<Provider store={store}>
    <QuoteBox />
</Provider>
, wrapper) : false && console.log(false);