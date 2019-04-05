import React, { Fragment } from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";

const Buttons = props => (
  <Container>
    {!props.sent && (
      <Fragment>
        {props.shouldISend ? (
          <Button onClick={() => props.clicks("Success")}>Senda</Button>
        ) : (
          <Button notClickable>Fylla út</Button>
        )}
        <Button onClick={() => props.clicks("off")}>Hætta við </Button>
      </Fragment>
    )}
  </Container>
);

export default Buttons;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 1rem;
  justify-content: space-around;
  @media (max-width: ${Breakpoints.landscape}px) {
    justify-content: space-around;
  }
  @media (max-width: ${Breakpoints.phone}px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #fa5757;
  display: block;
  width: 20%;
  color: white;
  min-width: 100px;
  font-weight: 100;
  white-space: nowrap;
  transition: background-color 0.4s ease;
  height: 60px;
  width: 200px;
  border-radius: 30px;
  font-size: 25px;
  letter-spacing: 1.5px;
  margin: 20px;
  @media (max-width: ${Breakpoints.desktop}px) {
    width: 100px;
    font-size: 16px;
    height: 40px;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 15px;
    margin: 0.3rem 0rem;
    text-align: center;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: ${props => props.notClickable ? "default" : "pointer"};
  }
`;
