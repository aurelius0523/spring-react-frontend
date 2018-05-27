import React from 'react';
import styled from 'styled-components';

const progressBarHeight = '3px';

const Layout = styled.div`
  height: ${progressBarHeight};
  background-color: ${props => props.theme.colorAbbey};
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const ProgressBar = styled.div`
  height: ${progressBarHeight};
  background-color: ${props => props.theme.colorMalibu};
  width: ${props => `${props.progress}%`};
  position: fixed;
`;

export default class VerticalScrollProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progressPercentage = winScroll / height * 100;

    this.setState({ progress: progressPercentage });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Layout>
        <ProgressBar progress={this.state.progress} />
      </Layout>
    );
  }
}
