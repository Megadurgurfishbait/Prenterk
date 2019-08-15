import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import Breakpoints from "../Elements/breakpoints";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <Container display={this.props.display} ref={this.myRef}>
        <Inputs clicks={this.props.myButton} />
      </Container>
    );
  }
}

const Container = styled.div`
  z-index: 40;
  position: absolute;
  width: 70vw;
  bottom: -800px;
  margin: 0px auto;
  display: ${props => props.display ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  color: red;

  @media (max-width: ${Breakpoints.landscape}px) {
    width: 90vw;
    bottom: -1000px;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    width: 75vw;
    height: 95%;
    justify-content: flex-start;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    width: 100vw;
  }
`;
