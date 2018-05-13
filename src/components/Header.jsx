import React from "react";
import styled from "styled-components";
import ReactLogo from "./animations/ReactLogo";
import { Link } from "react-router-dom";

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
  padding: 0 10px 0 10px;
  text-decoration: none;
`;

const FlexStyledLinkContainer = styled.div`
  flex-grow: 5;
`;

const FlexReactLogoContainer = styled.div`
  margin-left: 200px;
`;

export default () => (
  <FlexLayout>
    <FlexReactLogoContainer>
      <ReactLogo width={50} height={50} />
    </FlexReactLogoContainer>
    <FlexStyledLinkContainer>
      <StyledLink to="/A">Docs</StyledLink>
      <StyledLink to="/B">Tutorial</StyledLink>
      <StyledLink to="/C">Community</StyledLink>
      <StyledLink to="/S">Blog</StyledLink>
    </FlexStyledLinkContainer>
  </FlexLayout>
);
