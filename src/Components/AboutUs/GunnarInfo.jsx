import React from 'react';
import styled from 'styled-components';

const GunnarInfo = () => (

      <Container>

            <Title>Gunnar Óðinn Gunnarsson</Title>
            <Text>Punktur um hvað</Text>
            <Text>Gunnar hefur gert</Text>
            <Text>og hvað hann er frábært</Text>
            <Text>og hvað hann er frábært</Text>
            <Text>og hvað hann er frábært</Text>
      </Container>

)


export default GunnarInfo;

const Container = styled.div`
      display: flex;
      flex-direction: column;
      text-align: right;
      height: 100%;
      flex: 1 1 50%;
      border-right: solid white 4px;
      margin: 0px;
      background-color: #FF0009;

            &:hover {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top:0;
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
      margin: 2rem 1rem;
`;

const Text = styled.p`
      margin: 1rem 1rem;
`;
