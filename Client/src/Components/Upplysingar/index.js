import React, { Component } from "react";
import styled, { css } from "styled-components";
import AbsoluteList from "./AbsoluteList";
import Map from "./Map";
import Breakpoints from "../Elements/breakpoints";
import Info from "../../Assets/Footer/index";
import { fade } from "../../Assets/Keyframes";

class Upplysingar extends Component {
  constructor(props) {
    super(props);
    this.containerEnter = null;
    this.state = {
      showMap: false
    };
  }

  Ani = () => {
    this.setState({
      showMap: !this.state.showMap
    });
  };

  render() {
    return (
      <Container ref={c => (this.containerHeight = c)}>
        <Overlay ref={c => (this.containerEnter = c)}>
          <AbsoluteList
            drasl={this.drasl}
            heightContainer={this.containerHeight}
            byeContainer={this.containerEnter}
            show={this.state.showMap}
            Info={Info}
          />
        </Overlay>
        <Button
          aria-label="Loka og Opna kort"
          drasl={this.state.showMap.toString()}
          onClick={() => this.Ani()}
        >
          {this.state.showMap ? "Loka korti" : "Sjá Staðsetningu"}
        </Button>
        <Map />
      </Container>
    );
  }
}

export default Upplysingar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  height: 20vh;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  transform: skew(20deg);
  background-color: #fa5757;
  top: 0;
  left: -150px;
  height: 20vh;
  width: 100%;
  z-index: 2000;
  border-right: 5px solid white;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${Breakpoints.desktop}px) {
    left: -100px;
  }
`;

const Button = styled.button`
  position: absolute;
  font-size: 16px;
  top: 40px;
  right: 20px;
  z-index: 3000;
  border: none;
  width: 150px;
  height: 50px;
  background-color: #fa5757;
  border-radius: 30px;
  white-space: nowrap;
  color: white;
  border: 2px solid white;
  animation: ${props =>
    props.drasl === "true" ? css`"${fade} 1s linear" ` : null};
  cursor: pointer;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }

  @media (max-height: 400px) {
    top: 10px;
    font-size: 12px;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    width: 100px;
    height: 40px;
    font-size: 10px;
    top: 20px;
  }
`;
