import React from 'react';
import styled from 'styled-components'


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
      margin-top: 10%;
`;

const H1 = styled.h1`
      font-size: 4rem;
      color: white;
      font-weight: 100;
`;

export default Header;