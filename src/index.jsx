import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const theme = {
  primaryColor: "#20232a",
  colorReactBlue: "#61dafb",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
};

const app = document.getElementById("app");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  app
);
