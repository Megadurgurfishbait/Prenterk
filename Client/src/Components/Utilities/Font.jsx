import React from "react";
import styled from "styled-components";

const Font = props => <Container>{props.children}</Container>;

export default Font;

const Container = styled.h5`
  margin: 0px;
  padding: 0px;
  font-family: "roboto";
  font-weight: 300;
  border-bottom: 2px solid transparent;
`;
