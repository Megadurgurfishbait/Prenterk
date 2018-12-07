import React from 'react';
import styled from 'styled-components';
import Breakpoints from '../Elements/breakpoints';

const OpenHours = () => (
      <Container>
            <Title>Upplýsingar</Title>
            <Text>+354 898 3877</Text>
            <Text>pvs@pvs.is</Text>
            <Text>Gagnheiði 43, 800 Selfossi</Text>
            <Text>Mán - fös frá 08:00 - 17:00</Text>
      </Container>
)
export default OpenHours;

const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 1 1 100%;
      margin: 15px;
      font-size: 30px;
      color: white;    

      @media (max-width: ${Breakpoints.landscape}px){
            margin: 1rem .6rem 1.5rem .6rem;

      }
`;

const Title = styled.h1`
      margin: 1rem 1rem;
      font-size: 35px;

      @media (max-width: ${Breakpoints.landscape}px){
            font-size: 30px;
            margin: .6rem .6rem;
      }
      
`;

const Text = styled.p`
      margin: .5rem .5rem;
      @media (max-width: ${Breakpoints.landscape}px){
            font-size: 15px;
            margin: .2rem .2rem;
      }
`;
