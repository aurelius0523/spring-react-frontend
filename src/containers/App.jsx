import React from 'react';
import { format } from 'url';
import styled from 'styled-components';
import style from '../styles/main.css';
import { Link, Route } from 'react-router-dom';
import AppRouter from '@routers/AppRouter';
import { Footer, Header, VerticalScrollProgressBar } from '@modules/layouts';
import { Todo } from '@modules/todos';

const Layouts = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fontFamily};
`;

const JustifiedContent = styled.div`
  justify-self: center;
  align-self: center;
  margin-top: 63px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  @media (min-width: 1340px) {
    max-width: 1260px;
  }
`;

const StickyFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  color: red;
`;
export default class App extends React.Component {
  render() {
    return (
      <Layouts>
        <VerticalScrollProgressBar />
        <Header />
        <JustifiedContent>
          <AppRouter />
        </JustifiedContent>
        <StickyFooter />
      </Layouts>
    );
  }
}
