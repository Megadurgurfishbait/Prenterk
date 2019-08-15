import React, { Fragment } from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";




const Buttons = props => {


  const clickUs = () => {
    props.clicks("Success");
    props.sendItems();

  }

  return (
    

  <Container>
    {!props.sent && (
      <Fragment>
        {props.shouldISend ? (
          <Button onClick={() => clickUs()}>Senda</Button>
        ) : (
          <Button notClickable>Fylla út form</Button>
        )}
        <Button color={true} onClick={() => props.clicks("off")}>
          Hætta við
        </Button>
      </Fragment>
    )}
  </Container>
  )};

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
  background-color: ${props => (props.color ? "transparent" : "#fa5757")};
  display: block;
  width: 20%;
  color: ${props => (props.color ? "#fa5757" : "white")};
  min-width: 100px;
  font-weight: 100;
  white-space: nowrap;
  transition: background-color 0.4s ease;
  height: 60px;
  width: 200px;
  border-radius: 5px;
  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 20px;
  @media (max-width: ${Breakpoints.desktop}px) {
    width: 100px;
    font-size: 12px;
    height: 40px;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 12px;
    margin: 0.3rem 0rem;
    text-align: center;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: ${props => (props.notClickable ? "default" : "pointer")};
  }
`;
