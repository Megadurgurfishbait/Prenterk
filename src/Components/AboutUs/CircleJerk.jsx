import React from "react";
import styled from "styled-components";
import Map from "./Map";
import OpenHours from "./OpenHours";
import GunnarPicture from "./GunnarPicture";
import GunnarInfo from "./GunnarInfo";

const CircleJerk = () => (
  <FakeContainer>
    <Top>
      <GunnarInfo />
      <GunnarPicture />
      <FakeNews />
    </Top>
    <Top>
      <Map />
      <OpenHours />
    </Top>
  </FakeContainer>
);

const FakeContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  margin: 2rem 2rem;
  margin-top: 200px;
`;

const FakeNews = styled.div`
      display: flex;
      flex: 1 1 15%;
      height: 100%;
      min-height: 350px;
`;

const Top = styled.div`
      position: relative;
      max-width: 50vw;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      min-height: 350px;
      flex: 1 1 100%;
      border-radius: 5px;
      margin: 1rem;
      padding: 1rem;
      background-color: #383536;
`;

export default CircleJerk;
