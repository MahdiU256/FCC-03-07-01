import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/Quote';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Quote />, wrapper) : false && console.log(false);