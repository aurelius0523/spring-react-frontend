import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 400px;
`;

const TodoCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 80px 3px 50px;
  background-color: white;
  transition: 0.3s;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  padding: 2px 16px;
  border-radius: 10px;
`;

const EmphasizedTitle = styled.div`
  grid-column: 1/-1;
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  padding: 5px 5px 5px 5px;
`;

const ShortDescription = styled.div`
  grid-column: 1/-1;
  font-size: 0.8em;
  font-family: ${props => props.theme.fontFamily};
  padding: 5px 5px 5px 5px;
  color: darkgray;
`;

const Separator = styled.span`
  grid-column: 1/-1;
  border-top: solid;
  border-width: 1px;
  border-color: lightgray;
`;

const TodoNegativeButton = styled.span`
  justify-self: center;
  align-self: center;
  grid-column: 1/2;
  color: palevioletred;
`;

const TodoPositiveButton = styled.span`
  justify-self: center;
  align-self: center;
  grid-column: 2/3;
  color: palegreen;
`;

export default props => (
  <CardWrapper>
    <TodoCard>
      <EmphasizedTitle>{props.title}</EmphasizedTitle>
      <ShortDescription>{props.description}</ShortDescription>
      <Separator />
      <TodoNegativeButton>Not yet!</TodoNegativeButton>
      <TodoPositiveButton>I am done</TodoPositiveButton>
    </TodoCard>
  </CardWrapper>
);
