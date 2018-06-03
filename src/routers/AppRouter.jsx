import React from 'react';
import { Route } from 'react-router-dom';
import { Todo } from '@modules/todos';
import { PageContent } from '@modules/pageContents';

export default () => (
  <div>
    <Route path="/" exact component={Todo} />
    <Route path="/docs" component={PageContent} />
    {/* <Route path="/tutorial" component={Tutorial} />
    <Route path="/community" component={Community} />
    <Route path="/blog" component={Blog} /> */}
  </div>
);
