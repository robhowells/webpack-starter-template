import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';

let name = 'Rob';
const welcomeMessage = `Hello, ${name}`;

ReactDOM.render(
  <h1>{welcomeMessage}</h1>,
  document.getElementById('app')
)
