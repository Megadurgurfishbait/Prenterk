import React from 'react';
import styled from 'styled-components';


const OpenHours = () => (

      <Container>
            <Title>Um okkur</Title>
            <Text>+354 898 3877</Text>
            <Text>Gagnheiði 43, 800 Selfossi</Text>
            <Text>Mán - fös frá 08:00 - 17:00</Text>
      </Container>

)
export default OpenHours;


const Container = styled.div`
      display: flex;
      flex-direction: column;
      text-align: left;
      height: 100%;
      flex: 1 1 50%;
      border-left: solid white 4px;
      margin: 0px;
      background-color: #FF0009;

            &:hover {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            transform: scale(1.5);
            text-align: center;
            justify-content: center;
            align-items: center;
      }
`;

const Title = styled.h1`
      margin: 4rem 1rem;
`;

const Text = styled.p`
      margin: 1rem 1rem;
`;
