import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import ShowcaseItems from "./showcaseItems";
import Items from "../../Assets/Products";
import Breakpoints from "../Elements/breakpoints";

class Showcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PictureArray: Items["Nafnspjold"],
      PictureId: 0
    };
  }

  _choosePhoto = Type => {
    this.setState({
      PictureArray: Items[Type]
    });
  };

  _choosePhotoId = id => {
    this.setState({
      PictureId: id
    });
  };

  render() {
    const { PictureArray, PictureId } = this.state;
    return (
      <Container>
        <Helper>
          <List choosePhotoFun={this._choosePhoto} />
        </Helper>
        <ShowcaseItems
          Array={PictureArray}
          myFunc={this._choosePhotoId}
          myId={PictureId}
        />
      </Container>
    );
  }
}

export default Showcase;

const Container = styled.div`
  height: 100%; 
  width: 100%;
  display: flex;
  position: relative;
  margin: 0rem 0rem;
  @media (max-width: ${Breakpoints.desktop}px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${Breakpoints.portrait}px){
   min-height: 80h;
   overflow: hidden;
  }
  
`;

const Helper = styled.div`
  flex: 1 1 50%;
  background-color: transparent;

  @media (max-width: ${Breakpoints.desktop}px) {
    width: 100%;
  }
`;
