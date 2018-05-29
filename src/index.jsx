import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = {
  colorShark: '#20232a',
  colorMalibu: '#61dafb',
  colorAbbey: '#4e4f56',
  colorCornflowerBlue: '#999',
  colorWhite: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
};

const app = document.getElementById('app');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  app
);
