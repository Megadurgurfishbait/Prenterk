import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import SVG from "../../Assets/Modal/check";


const BigInput = props => (
  <Container>
    <H4>{props.name}</H4>
    <Cooler>
      <InputItem onChange={props.change} id={props.name} />
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

export default BigInput;

const Cooler = styled.div`
  border: none;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Img = styled.div`
  height: 30px;
  width: 30px;
  padding-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0.8rem auto;

  @media (max-width: ${Breakpoints.portrait}px) {
    margin: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const H4 = styled.h2`
  text-align: center;
  font-weight: 100;
  font-size: 20px;
  margin: 0px;
  letter-spacing: 2px;
  width: 100%;
  color: inherit;
  @media (max-width: ${Breakpoints.landscape}px) {
    font-size: 15px;
    letter-spacing: 0px;
    margin: 2px;
    text-align: center;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 15px;
  }
`;

const InputItem = styled.textarea`
  width: 100%;
  display: flex;
  min-height: 300px;
  border: 2px solid #fa5757;
  padding: 2px;
  &:focus {
    outline: none;
  }
`;
