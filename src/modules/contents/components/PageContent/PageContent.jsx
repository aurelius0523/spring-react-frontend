import React from 'react';
import styled from 'styled-components';

export default class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contentJson: ''
    };
  }

  render() {
    return <div>hello;</div>;
  }
}
