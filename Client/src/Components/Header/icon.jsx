import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";

const Icon = ({ drawerClickHandler }) => (
  <IconCon>
    <Button type="checkbox" name="checkbox" id="checkbox_id" value="value" />
    <Label htmlFor="checkbox_id" onClick={() => drawerClickHandler()}>
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
    </Label>
  </IconCon>
);
export default Icon;
const Button = styled.input`
  display: none;
`;
const TopLeft = styled.div`
  height: 50%;
  width: 50%;
  background-color: black;
  border-top-left-radius: 100%;
  box-sizing: border-box;
  border: 3px solid white;
`;
const TopRight = styled.div`
  height: 50%;
  width: 50%;
  background-color: transparent;
  border-top-right-radius: 100%;
  box-sizing: border-box;
  border: 3px solid white;
`;

const BottomLeft = styled.div`
  height: 50%;
  width: 50%;
  background-color: transparent;
  border-bottom-left-radius: 100%;
  box-sizing: border-box;
  border: 3px solid white;
`;

const BottomRight = styled.div`
  height: 50%;
  width: 50%;
  background-color: black;
  border-bottom-right-radius: 100%;
  box-sizing: border-box;
  border: 3px solid white;
`;

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 60px;
  height: 60px;
  position: fixed;
  transition: 0.6s all;
  z-index: 100000000000000000000;

  &:hover {
    cursor: pointer;
  }
  ${Button}:checked + & {
    transform: rotateZ(224deg);
    margin: -4px;
  }

  @media (max-width: ${Breakpoints.landscape}px) {
    height: 40px;
    width: 40px;
  }
`;

const IconCon = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100px;
  border: none;
  border-bottom-right-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fa5757;
  margin: 0;
  padding: 0;
  z-index: 1000000000000000000;

  @media (max-width: ${Breakpoints.landscape}px) {
    height: 60px;
    width: 60px;
  }
`;
