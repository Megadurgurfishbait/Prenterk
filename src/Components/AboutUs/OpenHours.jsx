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
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 1 1 100%;
      margin: 15px;
      font-size: 30px;
      color: white;    
`;

const Title = styled.h1`
      margin: 1rem 1rem;
`;

const Text = styled.p`
      margin: .5rem .5rem;
`;
