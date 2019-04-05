import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import Breakpoints from "../Elements/breakpoints";
class AnimationShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: "",
      olderImage: ""
    };
    this.containerEnter = null;
    this.containerLeave = null;
  }

  componentDidMount() {
    this.setState({
      showImage: this.props.Image
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.Image !== prevProps.Image) {
      this.setState({
        showImage: this.props.Image,
        olderImage: prevProps.Image
      });
      TweenMax.fromTo(
        this.containerEnter,
        0.5,
        {
          x: 200,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1 // to end state
        }
      ).delay(0.5);
      TweenMax.fromTo(
        this.containerLeave,
        1.1,
        {
          x: 0,
          opacity: 1
        },
        {
          x: -1300,
          opacity: 0
        }
      );
    }
  }

  render() {
    return (
      <Container>
        <Image
          src={this.state.showImage}
          ref={c => (this.containerEnter = c)}
          alt={`${this.props.myId}`}
        />
        <Image
          src={this.state.olderImage}
          ref={c => (this.containerLeave = c)}
          
        />
      </Container>
    );
  }
}

export default AnimationShowcase;
const Container = styled.div`
  display: flex;
  min-height: 350px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: ${Breakpoints.landscape}px) {
    align-items: flex-start;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    margin: 1rem auto;
  }
`;
const Image = styled.img`
  position: absolute;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  
  max-height: 300px;
  @media (max-width: ${Breakpoints.landscape}px) {
    height: 70%;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    max-width: 70%;
    margin-top: 20px;
  }
  @media (max-width: ${Breakpoints.phone}px) {
    height: 50%;
  }
`;
