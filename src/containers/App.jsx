import React from 'react';
import { format } from 'url';
import styled from 'styled-components';
import style from '../styles/main.css';
import { Link, Route } from 'react-router-dom';
import AppRouter from '../routers/AppRouter';
import { Footer, Header, VerticalScrollProgressBar } from '../modules/layouts';
import { Todo } from '~/modules/todos';
const Layouts = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fontFamily};
`;

const JustifiedContent = styled.div`
  justify-self: center;
  align-self: center;
  min-height: 100%;
  margin-top: 63px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Layouts>
        <VerticalScrollProgressBar />

        <Header />
        {/* <div>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </div> */}
        <JustifiedContent>
          <AppRouter />
        </JustifiedContent>
        <Footer />
      </Layouts>
    );
  }
}
