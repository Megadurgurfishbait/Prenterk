import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import AnimationShowcase from "./AnimationShowcase";

const showcaseItems = ({ Array, myFunc, myId }) => (
  <Container>
    <AnimationShowcase Image={Array[myId]} myId={myId} />
    <List>
      <Dot role="none" onClick={() => myFunc(0)} autoFocus />
      <Dot role="none" onClick={() => myFunc(1)} />
      <Dot role="none" onClick={() => myFunc(2)} />
    </List>
  </Container>
);

export default showcaseItems;

const Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Breakpoints.desktop}px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

const List = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;

  @media (max-width: ${Breakpoints.desktop}px) {
    margin: 1rem 2rem;
  }
`;

const Dot = styled.li`
  border-radius: 50%;
  border: 12.5px solid #fa5757;
  margin: 0px 10px;
  list-style: none;
  transition: all .2s;
  &:focus,
  &:active {
    transform: scale(.5);
    outline: none;
  }
`;
