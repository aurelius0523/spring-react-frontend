import React from "react";
import { format } from "url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content" />
        <Footer />
      </div>
    );
  }
}
