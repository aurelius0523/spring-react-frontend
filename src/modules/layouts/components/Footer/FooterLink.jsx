import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding-top: 40px;
`;

const CategoryTitle = styled.div`
  color: ${props => props.theme.colorCornflowerBlue};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3;
  letter-spacing: 0.08rem;
`;

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  line-height: 2;
  color: inherit;
`;

export default props => (
  <Layout>
    <CategoryTitle>{props.data.category}</CategoryTitle>
    {props.data.items.map(item => {
      return (
        <div key={item.url}>
          <StyledLink href={item.url}>{item.title}</StyledLink>
        </div>
      );
    })}
  </Layout>
);
