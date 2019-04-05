import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import IconInfo from "../../Assets/Millistig/index";
import { hellomoto } from "../Utilities/Animations";

class LeftSideContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Array = [];
  }

  componentDidMount() {
    hellomoto(this.Array, false, 0.5, 0.2);
  }

  render() {
    return (
      <Container>
        {IconInfo.map((values, index) => {
          return (
            <Information ref={c => (this.Array[index] = c)} key={index}>
              <Images>
                <Icon src={values.Pic} alt={`${values.Name}`}/>
              </Images>
              <Text>{values.Name}</Text>
            </Information>
          );
        })}
      </Container>
    );
  }
}

export default LeftSideContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 100%;
  width: 90vw;
  height: 100%;
  @media (max-width: ${Breakpoints.portrait}px) {
    margin: 1rem 0.5rem;
  }

  @media (max-width: ${Breakpoints.landscape}px) {
    width: 80vw;
  }

  @media (max-width: 630px) {
    margin: 0rem;
    width: 90vw;
  }
`;

const Icon = styled.img`
  height: 45px;
  width: 45px;
  display: block;
  @media (max-width: ${Breakpoints.portrait}px) {
    height: 20px;
    width: 20px;
  }
`;

const Images = styled.div`
  height: 80px;
  min-width: 80px;
  display: flex;
  border-radius: 100%;
  background-color: #fa5757;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Breakpoints.portrait}px) {
    height: 35px;
    min-width: 35px;
  }
`;

const Information = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 25vw;

  @media (max-width: ${Breakpoints.desktop}px) {
    width: 30vw;
  }
  @media (max-width: ${Breakpoints.landscape}px) {
    width: 50%;
    justify-content: center;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    width: 50%;
    height: 50px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    width: 80%;
    height: 40px;
  }
`;

const Text = styled.h5`
  color: black;
  font-size: 20px;
  width: 100%;
  margin: 0px;
  line-height: 100px;
  font-family: "Roboto";
  font-weight: 300;
  text-align: left;
  padding: 0px 20px;

  @media (max-width: 630px) {
    font-size: 14px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    font-size: 18px;
  }
`;
