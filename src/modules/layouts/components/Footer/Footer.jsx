import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: ${props => props.theme.colorShark};
  height: 300px;
`;
export default ({ className }) => (
  <FooterDiv className={className}>This is Footer</FooterDiv>
);
