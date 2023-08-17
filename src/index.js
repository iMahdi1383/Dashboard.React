import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const root = document.querySelector('#root');
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root,
);
