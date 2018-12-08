import React, {  Component } from "react";
import styled from "styled-components";
import Breakpoints from '../Elements/breakpoints';
import CardRender from "./CardRender";

const LeftSideContainer = () => 
      <Container>
        <TextSixPictures>
          <ItemHeading>Við framkvæmum </ItemHeading>
          <CardRender />
        </TextSixPictures>
      </Container>
 

export default LeftSideContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  height: 100%;
  overflow: hidden;
      @media (max-width: ${Breakpoints.portrait}px){
            margin: 1rem 0rem;
      }
`;

const TextSixPictures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
  @media (max-width: ${Breakpoints.landscape}px){
            flex: 1 1 100%;
            height: 70%;
      }
`;

const ItemHeading = styled.h1`
  margin: 1rem 0rem;
  width: 100%;
  font-size: 4rem;
  text-align: center;
  padding: 0rem;
  letter-spacing: 5px;
    @media (max-width: ${Breakpoints.landscape}px){
            font-size: 1.7rem;
      }
`;
