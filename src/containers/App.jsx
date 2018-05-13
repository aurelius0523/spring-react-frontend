import React from "react";
import { format } from "url";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import style from "../styles/main.css";
import Todo from "../components/Todo";
import Main from "../components/Main";
import { Link, Route } from "react-router-dom";
import AppRouter from "../routers/AppRouter";

const Layout = styled.div`
  display: grid;
  grid-template-rows: 100px auto auto 100px;
`;

const JustifiedContent = styled.div`
  justify-self: center;
  align-self: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <div>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </div>
        <JustifiedContent>
          <AppRouter />
        </JustifiedContent>
        <Footer />
      </Layout>
    );
  }
}
