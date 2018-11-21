import React from 'react';
import styled from 'styled-components';
import JPG from '../../Assets/Footer/logo.jpg';

const Logo = () => (
      <Container />
)

export default Logo;

const Container = styled.div`
      display:flex;
      justify-content: center;
      height: 100%;
      width: 50%;
      align-items: center;
      background-image: url(${JPG});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border: none;
`;