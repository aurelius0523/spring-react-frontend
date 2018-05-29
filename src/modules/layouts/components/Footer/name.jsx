import React from 'react';
import styled from 'styled-components';

export const StyledLinks = styled.a`
  font-size: 1rem;
  text-decoration: none;
  line-height: 2;
  color: inherit;
`;

export const CategoryTitle = styled.div`
  color: ${props => props.theme.colorCornflowerBlue};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3;
  letter-spacing: 0.08rem;
`;
