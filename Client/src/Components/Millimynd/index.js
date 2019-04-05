import React from "react";
import styled from "styled-components";
import Picture from "../../Assets/Millimynd/Dots.png";
import Font from "../Utilities/Font";
import Modal from "../Modal/index";
import { TimelineMax, TweenMax } from "gsap/all";
import Breakpoints from "../Elements/breakpoints";
class HafaSamband extends React.Component {
  constructor(props) {
    super(props);
    this.tl = new TimelineMax();
    this.state = {
      showModal: false
    };
  }

  handleMyClick = status => {
    let tl = this.tl;
    let ModaNode = this.Modal.myRef.current;
    if (status === "on") {
      this.setState({ showModal: true });
      tl.add(TweenMax.fromTo(this.Contact, 0.8, { y: 0 }, { y: -1000 }));
      tl.add(TweenMax.fromTo(ModaNode, 0.8, { y: 0 }, { y: -1000 }));
    }
    if (status === "off") {
      tl.add(TweenMax.fromTo(ModaNode, 0.8, { y: -1000 }, { y: 0 }));
      tl.add(TweenMax.fromTo(this.Contact, 0.8, { y: -1000 }, { y: 0 }));
      // Setja timeout á jafn langan tima og það tekur að klára animation
      setTimeout(() => this.setState({ showModal: false }), 1600);
    }
    if (status === "Success") {
      tl.add(TweenMax.fromTo(ModaNode, 1, { y: -1000 }, { y: -2000 }));
      tl.add(TweenMax.fromTo(this.Success, 1, { y: 0 }, { y: -900 }));
      // Setja timeout á jafn langan tima og það tekur að klára animation
      setTimeout(() => this.setState({ showModal: false }), 2000);
    }
  };

  render() {
    return (
      <Sicko>
        <ContactBox ref={c => (this.Contact = c)}>
          <Text>
            <Font> Ert þú með verkefni í huga? </Font>
          </Text>
          <Text>
            <Font> Hafðu Samband.</Font>
          </Text>
          <Button onClick={() => this.handleMyClick("on")}>Hafa Samband</Button>
        </ContactBox>
        <Overlay Image={Picture} />
        <Modal
          display={this.state.showModal}
          myButton={this.handleMyClick}
          ref={c => (this.Modal = c)}
        />
        <Success ref={c => (this.Success = c)}>
          {`Takk fyrir að hafa samband.
      Skilaboð þín eru komin á leiðarenda.`}
        </Success>
      </Sicko>
    );
  }
}

export default HafaSamband;

const Sicko = styled.div`
  display: flex;
  min-height: 800px;
  width: 100%;
  margin: 0px auto;
  background-color: rgba(255, 244, 244, 0.7);
  position: relative;
  overflow: hidden;
  justify-content: center;

  @media (max-width: ${Breakpoints.landscape}px) {
    align-items: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-image: url(${props => props.Image});
  background-size: 900px 450px;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  filter: opacity(10%);
  z-index: -1;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media (max-width: ${Breakpoints.landscape}px) {
    height: 70vh;
  }
`;

const Text = styled.div`
  z-index: 2;
  font-size: 60px;
  color: #fa5757;

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 40px;
  }
  @media (max-width: ${Breakpoints.phone}px) {
    font-size: 30px;
  }
`;

const Success = styled.h1`
  z-index: 4000000;
  position: absolute;
  width: 70vw;
  height: 80%;
  bottom: -1000px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  color: #fa5757;
  white-space: pre-line;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
`;
const Button = styled.button`
  z-index: 200000000000000000000000000000000000000000000000000000000;
  margin: 4rem auto;
  color: white;
  background-color: #fa5757;
  border: none;
  height: 60px;
  width: 250px;
  border-radius: 30px;
  font-size: 25px;
  letter-spacing: 1.5px;
  font-weight: 200;
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${Breakpoints.landscape}px) {
    min-height: 40px;
    width: 200px;
    font-size: 18px;
  }
  @media (max-width: ${Breakpoints.phone}px) {
    min-height: 40px;
    width: 150px;
    font-size: 14px;
  }
`;
