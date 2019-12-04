import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "./Assets/svg/003-down-arrow.svg";

import ImageContainer from "./ImageContainer";
import { opacityChange, upDown, downUp } from "./Assets/Keyframes";

const SynihornPage = React.forwardRef((props, refs) => {
  const [chosen, setChosen] = React.useState(0);
  const [text, setText] = React.useState("Jólakort");

  React.useEffect(() => {
    // eslint-disable-next-line default-case
    switch (chosen) {
      case 0:
        setText("Jólakort");
        break;
      case 1:
        setText("Reikningar");
        break;
      case 2:
        setText("Nafnspjöld");
        break;
      case 3:
        setText("Tímarit");
        break;
    }
  }, [chosen]);

  return (
    <Container ref={refs}>
      <TextContainer>{text}</TextContainer>
      <ImageWrapper>
        <ImageContainer type={chosen} />
      </ImageWrapper>
      <Footer>
        <Text>
          <Span
            role="button"
            aria-label="Skoða fleiri sýnishorn"
            onClick={() => {
              chosen <= 0 ? setChosen(3) : setChosen(chosen - 1);
            }}
          >
            <Logo />
          </Span>
          <H4> Sjá fleiri sýnishorn</H4>
          <Span
            role="button"
            aria-label="Skoða fleiri sýnishorn"
            up
            onClick={() => {
              chosen >= 3 ? setChosen(0) : setChosen(chosen + 1);
            }}
          >
            <Logo />
          </Span>
        </Text>
      </Footer>
    </Container>
  );
});

export default SynihornPage;

const Container = styled.section`
  background-color: #fa5757;
  display: flex;
  height: 600px;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  justify-content: center;
`;

const TextContainer = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 240px;
  font-size: 40px;
  font-weight: 300;
  color: #fa5757;
  letter-spacing: 2px;
  animation: ${opacityChange} 0.8s;
  border: 5px solid #fa5757;
  margin: 0;
  margin-top: -40px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 13px 20px -6px rgba(0, 0, 0, 0.35);
`;

const H4 = styled.h4`
  white-space: nowrap;
  color: #fa5757;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    cursor: default;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 100%;
  border: 5px solid #fa5757;
  border-radius: 5px;
  width: 300px;
  height: 80px;
  margin: 0px 5px -40px 5px;
  z-index: 4000;
  box-sizing: border-box;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);

  /* 
  Ef að við hover'um yfir Button stýlum við Span
  Veljum börn Span til að hreyfa upp og niður
  */
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: 50%;
  border: 5px solid white;
  background-color: #fa5757;

  & > * {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: white;
    transform: ${props => (props.up ? null : "rotate(180deg)")};
    transform-origin: 25% 25%;
  }

  &:hover {
    animation: ${props => (props.up ? upDown : downUp)} 1s infinite;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 90vw;
  justify-content: center;
  align-items: center;
`;
