import React from 'react';
import styled from 'styled-components'
import Picture from '../Elements/Logo';

const Title = (props) => (

      <Container>
            <Picture center />
            <H1>Hafa samband</H1>
      </Container>
)
export default Title;

const Container = styled.div`
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      height: 10%;
      width: 100%;
      padding: 1rem;
      justify-content: flex-start;
`;

const H1 = styled.h1`
      white-space: nowrap;
      width: 80%;
      display: flex;
      color: white;
      align-items: center;
      text-align: center;
      font-size: 3rem;
`;

const Close = styled.span`
      display: flex;
      color: white;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 20%;
`;

