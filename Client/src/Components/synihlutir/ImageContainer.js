import React from "react";
import styled, { css } from "styled-components";
import Breakpoints from "../Elements/breakpoints";

// Hooks
import useWindowDimension from "../../Hooks/useWindowDimensions";
// Assets
import {
  getBiggerAndFadeLeft,
  getBiggerAndFadeRight,
  fadeFromRight
} from "./Assets/Keyframes";
import { ReactComponent as LogoLeft } from "./Assets/svg/002-back.svg";
import { ReactComponent as LogoRight } from "./Assets/svg/001-right-arrow.svg";

import Items from "../../Assets/Products/index";

const ImageContainer = ({ type }) => {
  const [count, setCount] = React.useState(0);
  const { width } = useWindowDimension();
  return (
    <Container>
      <RelativeContainer>
        {Items.map(values => (
          <ColumnContainer up={type}>
            <ImageWrapper left={width <= 1500 ? count : 0}>
              {values.map(value => (
                <Image
                  src={width > 700 ? value.img : value.imgSmall}
                  alt={value.altText}
                />
              ))}
            </ImageWrapper>
          </ColumnContainer>
        ))}
      </RelativeContainer>

      {width <= 1500 && (
        <ArrowFunction>
          {count > -600 && (
            <RadioButton
              aria-label="Skoða fleiri sýnishorn"
              direction="left"
              onClick={() => setCount(count - 600)}
            >
              <Span>
                <LeftLogo />
              </Span>
            </RadioButton>
          )}
          {count < 600 && (
            <RadioButton
              aria-label="Skoða fleiri sýnishorn"
              direction="right"
              onClick={() => setCount(count + 600)}
            >
              <Span>
                <RightLogo />
              </Span>
            </RadioButton>
          )}
        </ArrowFunction>
      )}
    </Container>
  );
};

export default ImageContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Logos = () => `
height: 40px;
width: 40px;

@media (max-width: ${Breakpoints.portrait}px) {
  height: 25px;
  width: 25px;
}
`;

const LeftLogo = styled(LogoLeft)`
  ${Logos}
`;
const RightLogo = styled(LogoRight)`
  ${Logos}
`;

const ColumnContainer = styled.div`
  margin-bottom: 100px;
  position: relative;
  min-height: 100%;
  width: 100%;
  transition: transform 0.8s ease-out;
  transform: ${props =>
    0 <= props.up && props.up <= 3 ? `translateY(${props.up * -620}px)` : ""};
`;

const RelativeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  left: ${props => props.left}px;
  top: 0;
  width: 100% !important;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: left 0.8s ease-out;
  animation: ${fadeFromRight} 2s;
`;

const ArrowFunction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  animation-iteration-count: 2;
  animation-fill-mode: forwards;
  color: black;
`;

const RadioButton = styled.button`
  position: absolute;
  top: calc(50% - 40px);
  ${props => props.direction}: 0px;
  opacity: 1;
  z-index: 2000;
  width: 80px;
  height: 80px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 50%;
  padding: 0px;
  margin: 0px 20px;
  color: black;
  background-color: rgba(233, 233, 233, 0.8);
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  @media (max-width: ${Breakpoints.portrait}px) {
    height: 45px;
    width: 45px;
  }

  &:hover ${Span} {
    animation: ${props =>
        props.direction === "left"
          ? css`
              ${getBiggerAndFadeLeft}
            `
          : css`
              ${getBiggerAndFadeRight}
            `}
      0.4s linear;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  object-fit: contain;
  max-height: 400px;
  min-height: 400px;
  max-width: 500px;
  min-width: 500px;
  margin: 0px 50px;
  transition: transform 2s;

  @media (max-width: ${Breakpoints.landscape}px) {
    max-height: 300px;
    min-height: 300px;
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    max-height: 200px;
    min-height: 200px;
    max-width: 350px;
    min-width: 350px;
    margin: 0px 125px;
  }
`;
