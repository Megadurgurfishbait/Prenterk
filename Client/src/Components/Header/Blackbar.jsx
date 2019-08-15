import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import Icon from "./icon";

class Blackbar extends React.Component {
  constructor(props) {
    super(props);
    this.container = [];
  }

  render() {
    return (
      <BlackHeader>
        <Icon drawerClickHandler={this.props.drawerClickHandler} />
        <LeftText>
          <Button
            ref={c => (this.container[0] = c)}
            id="vorur"
            onClick={this.props.button}
          >
            Vörur
          </Button>
          <Button
            ref={c => (this.container[1] = c)}
            id="synishorn"
            onClick={this.props.button}
          >
            Sýnishorn
          </Button>
          <Button
            ref={c => (this.container[2] = c)}
            id="umOkkur"
            onClick={this.props.button}
          >
            Um okkur
          </Button>
        </LeftText>
      </BlackHeader>
    );
  }
}

export default Blackbar;


const BlackHeader = styled.div`
  display: flex;
  background-color: transparent;
  height: 100px;
  width: 100%;
  position: relative;
  z-index: 4000000000000000000000000000;
`;

const LeftText = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  justify-self: flex-end;
  padding-left: 250px;
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
  font-weight: 200;
  z-index: 55;
  font-family: "Roboto", serif;
  text-transform: uppercase;
  margin-right: 5rem;
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
