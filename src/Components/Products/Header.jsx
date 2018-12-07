import React from 'react';
import styled from 'styled-components'
import Breakpoints from '../Elements/breakpoints';

const Header = () => (
      <Container>
            <H1>Vörur</H1>
      </Container >
)
const Container = styled.div`
      display: flex;
      width: 100vw;
      justify-content: center;
      align-items: center;

`;

const H1 = styled.h1`
      font-size: 4rem;
      color: white;
      font-weight: 100;

      @media (max-width: ${Breakpoints.portrait}px){
            font-size: 2rem;
      }
`;


export default Header;