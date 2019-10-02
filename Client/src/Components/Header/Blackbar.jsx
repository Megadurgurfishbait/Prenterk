import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Icon from "./icon";

const Blackbar = ({ drawerClickHandler, button }) => {
  const { width } = useWindowDimensions();

  return (
    <BlackHeader mobileHeader={width < 700 ? "100%" : "1000px"}>
      {width < 700 && <Icon drawerClickHandler={drawerClickHandler} />}
      {width > 700 && 
      <LeftText>
        <Button role="button" aria-label="Skoða Vörur" id="vorur" onClick={button}>
          Vörur
        </Button>
        <Button  role="button" aria-label="Skoða Sýnishorn" id="synishorn" onClick={button}>
          Sýnishorn
        </Button>
        <Button role="button" aria-label="Skoða um okkur" id="umOkkur" onClick={button}>
          Um okkur
        </Button>
      </LeftText>
      }
    </BlackHeader>
  );
};

export default Blackbar;

const BlackHeader = styled.div`
  display: flex;
  background-color: transparent;
  height: 100px;
  width: ${props => props.mobileHeader};
  position: relative;
  z-index: 500000000000;
`;

const LeftText = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fa5757;
  margin: 0px;
  border-bottom-left-radius: 130px 100px;
  border-bottom-right-radius: 130px 100px;
  border: 2px solid white;
  border-top: none;
  padding: 0px;

  @media (max-width: ${Breakpoints.desktop}px) {
    display: none;
  }

  & > * {
    &:focus {
      outline: none !important;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  height: 60%;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  z-index: 55;
  font-family: "Roboto", serif;
  text-transform: uppercase;
  padding: 0px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease;
  white-space: nowrap;
  letter-spacing: 3px;
  &:hover,
  &:active {
    border-bottom: 1px solid white;
    outline: none;
  }
`;
