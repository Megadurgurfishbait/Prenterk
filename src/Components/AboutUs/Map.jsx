import React from 'react';
import styled from 'styled-components';
import Image from '../../Assets/AboutUs/location.JPG';

const Map = () => (

      <MyMap />

)
export default Map;


const MyMap = styled.div`
      display: flex;
      background-image: url(${Image});
      background-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      flex: 1 1 50%;
      border-right: 4px solid white;
      position:relative;
      transition: position 1s ease;



      &:hover {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            background-size: cover;
            height: 100%;
            width: 100%;
      }
`;
