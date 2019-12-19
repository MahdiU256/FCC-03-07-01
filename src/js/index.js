import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Quote from './components/Quote.jsx';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Quote />, wrapper) : false && console.log(false);