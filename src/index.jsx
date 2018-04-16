import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Promise from 'core-js/es6/promise';
import assign from 'core-js/fn/object/assign';
import fetch from 'whatwg-fetch';
import './styles/main.scss';

// render app
ReactDOM.render(
  <App />,
  document.getElementById('app')
);