import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  font-weight: 100;
  text-decoration: none;
  color: white;
  height: inherit;
  position: relative;

  ${props =>
    props.selected && {
      color: props.theme.colorMalibu,
      backgroundColor: props.theme.colorTuna
    }};
`;

const NavSelectedIndicator = styled.span`
  background: ${props => props.theme.colorMalibu};
  position: absolute;
  bottom: -1px;
  height: 3px;
  left: 0;
  right: 0;
`;

export const NavLink = props => (
  <StyledNavLink
    to={props.url}
    selected={props.selected}
    onClick={() => props.handleClick(props.itemIndex)}
  >
    {props.title}
    {props.selected ? <NavSelectedIndicator /> : null}
  </StyledNavLink>
);

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  itemIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
