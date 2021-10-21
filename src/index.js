import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import IndecisonApp from './components/IndecisonApp';
import reportWebVitals from './reportWebVitals';
import 'normalize.css/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <IndecisonApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
