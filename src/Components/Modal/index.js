import React, { Component } from "react";
import styled from "styled-components";
import Title from "./Title";
import Inputs from "./Inputs";

export default class Modal extends Component {
  render() {
    return (
      <Container>
        <Title clicks={this.props.clicks} />
        <Inputs />
      </Container>
    );
  }
}

const Container = styled.div`
  z-index: 4000000;
  position: absolute;
  background-color: #231f20;
  height: 100vh;
  width: 60vw;
  top: 5px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 4px solid white;
`;
