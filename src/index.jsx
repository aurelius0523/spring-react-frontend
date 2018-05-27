import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = {
  colorShark: '#20232a',
  colorMalibu: '#61dafb',
  colorAbbey: '#4e4f56',
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

//Cloudy AppleGet
//background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
