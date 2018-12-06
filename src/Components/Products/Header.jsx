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
      height: 40px;
      justify-content: center;
      align-items: center;
      margin-top: 15%;

      @media (max-width: ${Breakpoints.portrait}px){
            height: 20px;
      }

      @media (min-width: ${Breakpoints.desktop}px){
            margin-top: 7%;
      }


       @media (max-width: ${Breakpoints.phone}px){
            margin-top: 30%;
      }
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