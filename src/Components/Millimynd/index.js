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
            display: table;
            height: 100%;
            width: 100%;
            position: relative;
            color: #fff;
            background: url(${Picture}) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
      }
`;

export default Millimynd;

