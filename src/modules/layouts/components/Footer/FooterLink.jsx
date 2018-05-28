import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  box-sizing: inherit;
`;

const CategoryTitle = styled.div`
  color: ${props => props.theme.colorCornflowerBlue};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3;
  letter-spacing: 0.08rem;
  font-family: ${props => props.theme.fontFamily};
`;

const StyledLinks = styled.a`
  font-size: 1rem;
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily};
`;

export default props => (
  <Layout>
    <CategoryTitle>{props.data.category}</CategoryTitle>
    {props.data.items.map(item => {
      return (
        <div>
          <StyledLinks href={item.url} key={item.url}>
            {item.title}
          </StyledLinks>
        </div>
      );
    })}
  </Layout>
);
