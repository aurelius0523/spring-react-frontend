import React from "react";
import { format } from "url";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import style from "../styles/main.css";
const GridParent = styled.div`
  display: grid;
  margin: 0px;
`;

export default class App extends React.Component {
  render() {
    return (
      <GridParent>
        <Header />
        <div className="content" />
        <Footer />
      </GridParent>
    );
  }
}
