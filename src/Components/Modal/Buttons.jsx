import React from 'react';
import styled from 'styled-components';

const Buttons = (props) => (
      <Container>
            <Button >Senda</Button>
            <Button danger>Hætta við</Button>
      </Container>
)

export default Buttons;

const Container = styled.div`
      height: 20%;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
`;

const Button = styled.button`
      border: 3px solid ${props => props.danger ? "#DB0000" : "#1b7b35"};
      border-radius: 10px;
      background-color: ${props => props.danger ? "#e23232" : "#229A43"};
      display: block;
      height: 40px;
      width: 20%;
      color: black;
      font-weight: 500;
      font-size: 1rem;
`;