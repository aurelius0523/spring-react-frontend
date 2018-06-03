import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from '@modules/animations';
import { Link } from 'react-router-dom';
import { NavLink, NavLinks } from '@modules/layouts';

const FlexLayout = styled.header`
  background-color: ${props => props.theme.colorShark};
  font-family: ${props => props.theme.fontFamily};
  width: 100%;
  position: fixed;
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

const datas = [
  {
    url: '/docs',
    title: 'Docs'
  },
  {
    url: '/tutorial',
    title: 'Tutorial'
  },
  {
    url: '/community',
    title: 'Community'
  },
  {
    url: '/blog',
    title: 'Blog'
  }
];

export default () => (
  <FlexLayout>
    <FlexHeaderContainer>
      <FlexReactLogoContainer>
        <ReactLogo height={30} />
        <ReactLettering>React</ReactLettering>
      </FlexReactLogoContainer>
      <NavLinks data={datas} />
    </FlexHeaderContainer>
  </FlexLayout>
);
