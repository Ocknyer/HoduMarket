import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import Globalstyle from './styles/GlobalStyle';
import './index.css';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
