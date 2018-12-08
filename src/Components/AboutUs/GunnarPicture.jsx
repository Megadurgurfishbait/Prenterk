import React from "react";
import styled from "styled-components";
import Image from "../../Assets/AboutUs/prufael.JPG";
import Breakpoints from "../Elements/breakpoints";

const GunnarPicture = () => <Container />;
export default GunnarPicture;

const Container = styled.div`
  display: flex;
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  position: absolute;
  ${position(300, 300, 300, 300, -75, "-75px")}
  border-radius: 100%;

  @media (max-width: ${Breakpoints.landscape}px) {
    ${position(200, 200, 200, 200, -50, "-50px")}
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    ${position(150, 150, 150, 150, -70, 0)}
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

function position(minH, minW, maxH, maxW, top, right) {
  return `
      min-height: ${minH}px;
      min-width: ${minW}px;
      max-height: ${maxH}px;
      max-width: ${maxW}px;
      top: ${top}px;
      right: ${right};
      `;
}
