import React, { Fragment, Component } from "react";
import styled from "styled-components";
import SixPictures from "./Sixpicture";
import { Spring } from "react-spring";

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

`;

const TextSixPictures = styled.div`
  display: flex;
  flex: 1 1 50%;

  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
`;

const ItemHeading = styled.h1`
  position: relative;
  padding: 1rem 3rem;

  padding-top: 50px;
  margin: 0;
  height: 20%;
  width: 100%;
  text-align: left;
`;

const ItemText = styled.p`
  text-align: left;
  width: 100%;
  margin: 0;
  padding: 1rem 3rem;
`;
