import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './app';
import 'styles/index.scss';

WebFont.load({
  google: {
    families: ['Roboto Slab:400,500,600', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
