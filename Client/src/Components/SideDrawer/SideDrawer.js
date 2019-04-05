import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";

const SideDrawer = props => (
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
);

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
  z-index: 56;
  border: none;
  border-bottom-right-radius: 25%;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  background: #fa5757;
  &:focus {
    outline: none;
  }
  & ul {
    z-index: 5;
    width: 60%;
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
  margin: 20px auto;
  width: 100%;
  & > button {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 25px;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    font-weight: 100;
    @media (max-width: ${Breakpoints.portrait}px) {
      font-size: 1.1rem;
    }
    @media (max-width: ${Breakpoints.phone}px) {
      font-size: 0.7rem;
      line-height: 1.5;
    }

    &:hover,
    &:active {
      border-bottom: 1px solid white;
    }
  }
`;
