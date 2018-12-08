import React from "react";
import styled from "styled-components";
import Map from "./Map";
import OpenHours from "./OpenHours";
import GunnarPicture from "./GunnarPicture";
import GunnarInfo from "./GunnarInfo";
import Breakpoints from "../Elements/breakpoints";

export default class AboutUs extends React.PureComponent {
  render() {
    return (
      <FakeContainer>
        <Top>
          <GunnarInfo />
          <GunnarPicture />
          <FakeNews />
        </Top>
        <Top bigger>
          <Map />
          <OpenHours />
        </Top>
      </FakeContainer>
    );
  }
}

const FakeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  background-color: #231f20;
  flex-flow: row wrap;
  padding-top: 100px;
`;

const FakeNews = styled.div`
  display: flex;
  flex: 1 1 40%;
  height: 100%;
  min-height: 350px;

  @media (max-width: ${Breakpoints.landscape}px) {
    flex: 1 1 25%;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    min-height: 50px;
    min-width: 50px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    min-height: 80px;
    min-width: 50px;
  }
`;

const Top = styled.div`
  position: relative;
  max-width: 60vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 350px;
  max-height: 400px;
  flex: 1 1 100%;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #383536;

  @media (max-width: ${Breakpoints.landscape}px) {
    max-width: 70vw;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    max-width: 80vw;
    flex-direction: column-reverse;
    min-height: ${props => (props.bigger ? "500px" : "350px")};
    max-height: ${props => (props.bigger ? "500px" : "350px")};
  }

  @media (max-width: ${Breakpoints.phone}px) {
    max-width: 90vw;
    margin: 1rem 0;
    padding: 0;
  }
`;
