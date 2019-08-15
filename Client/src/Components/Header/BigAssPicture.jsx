import React from "react";
import styled from "styled-components";
import { abomination1 } from "../../Assets/Keyframes";
import Breakpoints from "../Elements/breakpoints";

const BigAssPicture = () => (
  <BigTitleDiv>
    <TextContainer>
      <TitleContainer>
        <Title> Prentverk</Title>
        <Title> Selfoss</Title>
      </TitleContainer>
      <ParagraphContainer>
        <Paragraph />
      </ParagraphContainer>
    </TextContainer>
  </BigTitleDiv>
);

export default BigAssPicture;

const BigTitleDiv = styled.div`
  display: flex;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  position: absolute;

  @media (max-width: ${Breakpoints.landscape}px) {
    justify-content: center;
  }
`;

const TitleContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: ${Breakpoints.landscape}px) {
    align-items: center;
    width: 100%;
  }
`;

const ParagraphContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-Start;
  text-align: left;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0rem 1rem 0rem 15rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.landscape}px) {
    margin: auto 0px;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  margin: -1rem 0rem;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: white;
  font-weight: 500;
  font-family: "Roboto", serif;
  font-size: 130px;

  @media (max-width: ${Breakpoints.landscape}px) {
    margin: -5px 0rem;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 50px;
  }
`;

const Paragraph = styled.p`
  padding-left: 8px;
  text-align: left;
  color: white;
  width: 80%;
  font-weight: 300;
  font-family: "Roboto", serif;
  line-height: 2;
  letter-spacing: 2px;

  &::after {
    width: 100%;
    content: "";
    animation: ${abomination1} 15s linear 1;
    animation-fill-mode: forwards;
  }
  
  @media (max-width: ${Breakpoints.landscape}px) {
    width: 120%;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    width: 80%;
  }

 
`;
