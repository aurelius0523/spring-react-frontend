import React from 'react';
import { Route } from 'react-router-dom';
import Todo from '../components/Todo';
import Main from '../components/Main';

export default () => (
  <div>
    <Route path="/" exact component={Todo} />
    <Route path="/main" component={Main} />
    {/* <Route path="/docs" component={Docs} />
    <Route path="/tutorial" component={Tutorial} />
    <Route path="/community" component={Community} />
    <Route path="/blog" component={Blog} /> */}
  </div>
);
