import React, { memo } from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";

const SideDrawer = memo(props => (
  <StyledDrawer open={props.show ? true : false}>
    <ul>
      <ListItem href="#" key={2}>
        <button id="vorur" onClick={props.button}>
          Vörur
        </button>
      </ListItem>
      <ListItem href="#" key={4}>
        <button id="synishorn" onClick={props.button}>
          Sýnishorn
        </button>
      </ListItem>
      <ListItem href="#" key={1}>
        <button id="umOkkur" onClick={props.button}>
          Um Okkur
        </button>
      </ListItem>
    </ul>
  </StyledDrawer>
));

export default SideDrawer;

const StyledDrawer = styled.nav`
  height: ${props => (props.open ? "25vh" : "0vh")};
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  min-height: 300px;
  transition: all 0.5s linear;
  transform: ${props => (props.open ? "translateX(0%)" : "translateX(-110%)")};
  display: flex;
  z-index: 10100;
  border: none;
  border-bottom-right-radius: 25%;
  background: #fa5757;
  &:focus {
    outline: none;
  }
  & > ul {
    z-index: 50;
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 0;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    height: 60px;
    min-height: 50px;
    width: 100%;
    border-bottom-right-radius: 0%;

    & > ul {
      flex-direction: row;
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  width: 100%;
  height: 50px;
  & > button {
    height: 100%;
    width: 100%;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;

    @media (max-width: ${Breakpoints.portrait}px) {
      font-size: 1.1rem;
    }
    @media (max-width: ${Breakpoints.phone}px) {
      font-size: 14px;
      line-height: 1;
    }

    &:hover,
    &:active,
    &:focus {
      background-color: white;
      color: #fa5757;
      outline: none !important;
    }
  }
`;
