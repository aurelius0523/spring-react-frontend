import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from '~/modules/animations';
import { Link } from 'react-router-dom';

const FlexLayout = styled.header`
  background-color: ${props => props.theme.colorShark};
  font-family: ${props => props.theme.fontFamily};
  width: 100%;
  display: block;
`;

const FlexHeaderContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 599px) {
    height: 40px;
  }

  @media (min-width: 600px) {
    height: 60px;
  }

  @media (min-width: 1340px) {
    max-width: 1260px;
  }

  @media (min-width: 780px) {
    width: 90%;
  }
`;

const FlexReactLogoContainer = styled.a.attrs({
  href: '/'
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: inherit;

  @media (min-width: 600px) {
    width: calc(100% / 6);
  }
`;

const ReactLettering = styled.span`
  font-style: normal;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colorMalibu};
  font-weight: 700;
  font-size: 20px;
`;

const FlexNavContainer = styled.nav`
  display: flex;
  height: 100%;
  width: 60%;
  align-items: stretch;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  font-weight: 100px;
  text-decoration: none;
  align-self: center;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
`;

export default () => (
  <FlexLayout>
    <FlexHeaderContainer>
      <FlexReactLogoContainer>
        <ReactLogo height={30} />
        <ReactLettering>React</ReactLettering>
      </FlexReactLogoContainer>
      <FlexNavContainer>
        <StyledNavLink to="/docs">Docs</StyledNavLink>
        <StyledNavLink to="/tutorial">Tutorial</StyledNavLink>
        <StyledNavLink to="/community">Community</StyledNavLink>
        <StyledNavLink to="/blog">Blog</StyledNavLink>
      </FlexNavContainer>
    </FlexHeaderContainer>
  </FlexLayout>
);
