import React from 'react';
import ReactDOM from 'react-dom';
import Densebar from './appbar';
import Footerbar from './assets/footer';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Densebar />
    <App />
    <Footerbar />
  </React.StrictMode>,
  document.getElementById('root')
);
