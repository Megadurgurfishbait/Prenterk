import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import SVG from "../../Assets/Modal/check";
const Input = props => (
  <Container>
    <H4>{props.name}</H4>
    <Cooler>
      {props.name === "Email" ? (
        <InputItem
          onChange={props.change}
          placeholder={props.placeholder}
          type="email"
          id={props.name}
        />
      ) : (
        <InputItem
          placeholder={props.placeholder}
          onChange={props.change}
          id={props.name}
        />
      )}
      <Img>
        {props.done ? (
          <SVG background="#4CAF50" foreground="#CCFF90" />
        ) : (
          <SVG background="#b04c4c" foreground="#ff8f8f" />
        )}
      </Img>
    </Cooler>
  </Container>
);

export default Input;

const Cooler = styled.div`
  border: none;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${Breakpoints.landscape}px) {
    margin: 0px;
  }
`;

const Img = styled.div`
  height: 30px;
  width: 30px;
  padding-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin: 5px auto;

  @media (max-width: ${Breakpoints.portrait}px) {
    flex-direction: column;
    margin: 0px;
    width: 90%;
  }
`;
const H4 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin: 0px;
  letter-spacing: 2px;
  width: 100%;
  color: inherit;
  @media (max-width: ${Breakpoints.landscape}px) {
    font-size: 15px;
    letter-spacing: 0px;
    margin: 2px;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 15px;
    text-align: center;
  }
`;

const InputItem = styled.input`
  padding: 5px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 20px;
  border: 2px solid #fa5757;
  @media (max-width: ${Breakpoints.portrait}px) {
    min-height: 10px;
    width: 80%;
  }

  &:focus {
    outline: none;
  }
`;
