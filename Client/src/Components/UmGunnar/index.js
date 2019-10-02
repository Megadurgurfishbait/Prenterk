import React from "react";
import styled from "styled-components";
import { Large, Small } from "../../Assets/AboutUs/";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Breakpoints from "../Elements/breakpoints";
const UmGunnar = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Info>
        <PictureShow alt="Mynd af eiganda" src={width > 700 ? Large : Small} />
      </Info>
      <Picture>
        <Title>Gunnar Gunnarsson </Title>
        <Break />
        <Paragraph>
          Gunnar var í Iðnskólanum í Reykjavík 1970-1971, en hóf nám í prentun
          15. október 1971 í Prentsmiðju Suðurlands á Selfossi. Hann lauk námi
          1975 og tók sveinspróf 1976. Síðan starfaði hann samfleytt hjá
          Prentsmiðju Suðurlands þar til hann stofnaði sína eigin prentsmiðju.
          Fyrirtækið er rekið sem einstaklingsfyrirtæki og vinnur Gunnar
          mestmegnis einn.
        </Paragraph>
      </Picture>
    </Container>
  );
};

export default UmGunnar;

const Break = styled.div`
  height: 1px;
  width: 100%;
  background-color: white;
  margin: 15px 0px;
  width: 50%;
`;

const Container = styled.div`
  width: 100%;
  background: #fa5757;
  display: flex;
  min-height: 70vh;

  @media (max-width: ${Breakpoints.desktop}px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 1 1 50%;
  margin: -2px;
  margin-left: -150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${Breakpoints.desktop}px) {
    justify-content: center;
    align-items: flex-end;
    margin: 0px;
    background: white;
    margin-top: -2px;
  }
`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;
  color: white;
  min-height: 100%;

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
  font-weight: 500;
  width: 50%;
  text-align: left;
  margin: 0.2rem 0px;
  font-size: 2rem;
  line-height: 1;

  @media (max-width: ${Breakpoints.desktop}px) {
    text-align: center;
  }
  @media (max-width: ${Breakpoints.landscape}px) {
    margin: 1.5rem auto 0.3rem auto;
    width: 70%;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  width: 50%;
  text-align: left;
  line-height: 1.75;
  color: #fedddd;
  @media (max-width: ${Breakpoints.landscape}px) {
    line-height: 1.5;
    font-size: 13px;
  }
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 12px;
    width: 70%;
  }
`;

const PictureShow = styled.img`
  max-height: 75%;
  background-color: white;
  border-radius: 50%;
  border: 5px solid white;

  @media (max-width: ${Breakpoints.landscape}px) {
    height: 300px;
  }

  @media (max-width: ${Breakpoints.desktop}px) {
    height: 200px;
    width: 200px;
    border: 10px solid #fa5757;
    border-radius: 50%;
    background-color: white;

    margin-bottom: -2rem;
  }
`;
