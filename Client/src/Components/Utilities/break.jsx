import React from "react";
import styled from "styled-components";

export const Break = ({ height }) => <Breakspace height={height} />;
const Breakspace = styled.div`
  height: ${props => props.height ? props.height : "7rem"};
  width: 100%;
`;
