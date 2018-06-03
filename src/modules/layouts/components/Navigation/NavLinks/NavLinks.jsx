import React from 'react';
import { NavLink } from '@modules/layouts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexNavContainer = styled.nav`
  display: flex;
  height: 100%;
  width: 60%;
  align-items: stretch;
`;

export default class NavLinks extends React.Component {
  state = {
    selectedTabId: -1
  };

  isActive = id => {
    return this.state.selectedTabId === id;
  };

  handleClickEvent = id => {
    this.setState({ selectedTabId: id });
  };

  renderChild = () => {
    return this.props.data.map((nav, index) => {
      return (
        <NavLink
          key={index}
          itemIndex={index}
          url={nav.url}
          title={nav.title}
          selected={this.isActive(index)}
          handleClick={this.handleClickEvent}
        />
      );
    });
  };

  render() {
    return <FlexNavContainer>{this.renderChild()}</FlexNavContainer>;
  }
}

NavLinks.propTypes = {
  data: PropTypes.array.isRequired
};
