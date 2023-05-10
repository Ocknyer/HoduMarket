import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import Globalstyle from './styles/GlobalStyle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Globalstyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
