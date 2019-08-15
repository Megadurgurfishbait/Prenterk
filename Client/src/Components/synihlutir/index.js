import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoDown } from "./Assets/svg/003-down-arrow.svg";
import { ReactComponent as LogoUp } from "./Assets/svg/004-up-arrow.svg";

import ImageContainer from "./ImageContainer";
import { opacityChange, upDown, downUp } from "./Assets/Keyframes";

const SynihornPage = React.forwardRef((props, refs) => {
  const [chosen, setChosen] = React.useState(0);
  const [text, setText] = React.useState("Jólakort");

  React.useEffect(() => {
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
        <Text
          onClick={() => {
            chosen <= 0 ? setChosen(3) : setChosen(chosen - 1);
          }}
        >
          <Span>
            <LogoUp />
          </Span>
        </Text>

        <Text
          up
          onClick={() => {
            chosen >= 3 ? setChosen(0) : setChosen(chosen + 1);
          }}
        >
          <Span>
            <LogoDown />
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
`;

const Text = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px solid #fa5757;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0px 5px -40px 5px;
  z-index: 4000;
  box-sizing: border-box;

  /* 
  Ef að við hover'um yfir Button stýlum við Span
  Veljum börn Span til að hreyfa upp og niður
  */
  &:hover ${Span} {
    cursor: pointer;
    & > * {
      animation: ${props => (props.up ? upDown : downUp)} 1s infinite;
    }
  }
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  min-width: 100%;
  min-height: 100%;
  position: relative;
  background-color: blue;

  & > * {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #fa5757;
  }
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 90vw;
  justify-content: center;
  align-items: center;
`;
