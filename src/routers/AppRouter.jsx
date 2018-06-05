import React from 'react';
import { Route } from 'react-router-dom';
import { Todo } from '@modules/todos';
import { PageContent } from '@modules/pageContents';
import restMd from '@resources/markdown/rest.md';
import sleepMd from '@resources/markdown/sleep.md';

export default () => (
  <div>
    <Route path="/" exact component={Todo} />
    <Route path="/docs" render={props => <PageContent file={restMd} />} />
    <Route path="/tutorial" render={props => <PageContent file={sleepMd} />} />
    {/* <Route path="/community" component={Community} />
    <Route path="/blog" component={Blog} /> */}
  </div>
);
