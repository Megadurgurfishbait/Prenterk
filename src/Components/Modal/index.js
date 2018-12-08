import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Inputs from "./Inputs";
import { keyFrameExampleOne } from '../../Assets/Keyframes';

const index = (props) => 
      <Container>
        <Title clicks={props.clicks} />
        <Inputs clicks ={props.clicks}/>
      </Container>


export default index;

const Container = styled.div`
  z-index: 4000000;
  position: absolute;
  background-color: #231f20;
  height: 80vh;
  width: 60vw;
  top: 5px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 20px;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 4px solid white;
  transition: all .6s ease;

  animation: ${keyFrameExampleOne} .2s ease-in;
`;


