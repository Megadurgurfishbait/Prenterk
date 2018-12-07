import React from 'react';
import styled from 'styled-components';
import Picture from '../../Assets/Millimynd/hus.JPG';



const Millimynd = () =>  <Sicko />


const Sicko = styled.div`

      display: block;
      height: 75vh;
      min-height: 600px;
      max-height: 700px;
      width: 100vw;
      background-image: url(${Picture});
      background-attachment: fixed;
      
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -4;
      
      @media (max-width: 600px){
            background-attachment: initial;
      }
`;

export default Millimynd;

