import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import OpenHours from './OpenHours';
import GunnarPicture from './GunnarPicture';
import GunnarInfo from './GunnarInfo';

const CircleJerk = () => (

      <Circle>
            <FakeContainer>

            <Top>
                  <Map/>
                  <OpenHours />
            </Top>

            <Top>
                  <GunnarInfo />
                  <GunnarPicture />
            </Top>
            </FakeContainer>


      </Circle>
      
)

const FakeContainer = styled.div`
      display: block;
      height: 100%;
      width: 100%;
      position: relative;

`;
const Circle = styled.div`
      min-height: 850px;
      min-width: 850px;
      max-height: 1050px;
      max-width: 1050px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      margin: 0px;
      margin-top: 100px;
      padding: 0px;

      height: 90vh;
      width: 60vw;
      border-radius: 100%;
      border: solid 8px white;
`;

const Top = styled.div`
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      height: 50%;
      width: 100%;
      border: 4px solid white;
`;

export default CircleJerk;


