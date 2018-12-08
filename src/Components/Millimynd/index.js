import React from 'react';
import styled from 'styled-components';
import Picture from '../../Assets/Millimynd/hus.JPG';

const Millimynd = () =>  <Sicko />


const Sicko = styled.div`
      display: block;
      min-height: 400px;
      max-height: 500px;
      width: 100vw;
      background-image: url(${Picture});
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -4;
`;

export default Millimynd;

