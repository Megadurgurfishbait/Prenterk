import React from "react";
import styled from "styled-components";
import Image from "../../Assets/AboutUs/owner.png";
import Breakpoints from "../Elements/breakpoints";
const UmGunnar = () => (
  <Container>
    <Info>
      <PictureShow src={Image} />
    </Info>
    <Picture>
      <Title>Gunnar Gunnarsson </Title>
      <Paragraph>
        re-or-less normal distribution of letters, as opposed to using 'Content
        here, content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </Paragraph>
    </Picture>
  </Container>
);

export default UmGunnar;

const Container = styled.div`
  width: 100%;
  background: #fa5757;
  display: flex;
  min-height: 50vh;

  @media (max-width: ${Breakpoints.desktop}px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  transform: skew(20deg);
  background: white;
  flex: 1 1 50%;
  margin: -2px;
  margin-left: -150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${Breakpoints.desktop}px) {
    justify-content: center;
    margin: 0px;
    transform: skew(0deg);
    margin-top: -2px;
  }
`;

const Picture = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;
  color: white;
  height: 100%;

  @media (max-width: ${Breakpoints.desktop}px) {
    justify-content: center;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    width: 70%;
    margin: 2rem auto;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    width: 100%;
    min-height: 30vh;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  width: 50%;
  text-align: left;
  margin: 4rem 0px;
  font-size: 4rem;
  line-height: 0.8;

  @media (max-width: ${Breakpoints.desktop}px) {
    text-align: center;
  }
  @media (max-width: ${Breakpoints.landscape}px) {
    font-size: 3rem;
    margin: 1.5rem auto 0.3rem auto;
    width: 70%;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 2rem;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    font-size: 2rem;

    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  width: 50%;
  text-align: left;
  line-height: 2;
  filter: opacity(0.7);
  @media (max-width: ${Breakpoints.landscape}px) {
    line-height: 1.5;
    font-size: 13px;
    width: 70%;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 10px;
    line-height: 1.4;
  }
`;

const PictureShow = styled.img`
  transform: skew(-20deg);
  max-height: 75%;

  @media (max-width: ${Breakpoints.landscape}px) {
    height: 300px;
  }

  @media (max-width: ${Breakpoints.desktop}px) {
    height: 200px;
    width: 200px;
    transform: skew(0deg);
    border: 10px solid #fa5757;
    border-radius: 50%;
    background-color: white;

    margin-bottom: -2rem;
  }
`;
