import React from 'react';
import styled from 'styled-components';
import ReactLogo from './animations/ReactLogo';
import { Link } from 'react-router-dom';

const FlexLayout = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  color: white;
  padding: 1rem;
  height: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  padding: 0 20px 0 20px;
  height: 60px;
  text-decoration: none;
  :hover {
    background-color: #373940;
  }
`;

const FlexStyledLinkContainer = styled.div`
  flex-grow: 5;
`;

const FlexReactLogoContainer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <FlexLayout>
    <FlexReactLogoContainer>
      <ReactLogo width={50} height={50} />
    </FlexReactLogoContainer>
    <FlexStyledLinkContainer>
      <StyledLink to="/docs">Docs</StyledLink>
      <StyledLink to="/tutorial">Tutorial</StyledLink>
      <StyledLink to="/community">Community</StyledLink>
      <StyledLink to="/blog">Blog</StyledLink>
    </FlexStyledLinkContainer>
  </FlexLayout>
);
