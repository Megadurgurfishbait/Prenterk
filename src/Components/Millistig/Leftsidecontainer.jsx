import React, { Fragment, Component } from "react";
import styled from "styled-components";
import SixPictures from "./Sixpicture";
import { Spring } from "react-spring";
import Breakpoints from '../Elements/breakpoints';

export default class LeftSideContainer extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Container>
        <TextSixPictures>
          <ItemHeading>{this.props.values.title}</ItemHeading>
          <ItemText>
            {this.props.values.description
              ? this.props.values.description
              : "Við sjáum um að ljósrita fyrir þig heilu staflana af blöðum"}
          </ItemText>
          <SixPictures onPointerOver={this.props.push} />
        </TextSixPictures>
      </Container>
    );
  }
}

const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  height: 100%;
  margin: 1rem 0rem;
  margin-left: 5%;
 overflow: hidden;

      @media (max-width: ${Breakpoints.portrait}px){
            margin: 1rem 0rem;

      }
`;

const TextSixPictures = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;

  @media (max-width: ${Breakpoints.landscape}px){
            flex: 1 1 100%;
            height: 70%;
      }
`;

const ItemHeading = styled.h1`
  padding: 0rem 3rem;
  padding-top: 10px;
  margin: 0;
  width: 100%;
  text-align: left;
  font-size: 1.7rem;

    @media (max-width: ${Breakpoints.landscape}px){
            padding: 0rem;
            font-size: 1.7rem;
            text-align: center;
      }
`;

const ItemText = styled.p`
  text-align: left;
  width:90%;
  margin: 0;
  padding: .5rem 2rem;

      @media (max-width: ${Breakpoints.landscape}px){
            padding: .5rem .5rem;
            text-align: center;
      }

      @media (max-width: ${Breakpoints.portrait}px){
            width: 90%;
      }

      @media (max-width: ${Breakpoints.phone}px){
            text-align: left;
      }
`;
