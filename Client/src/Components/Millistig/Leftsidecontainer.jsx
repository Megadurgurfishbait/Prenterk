import React from "react";
import styled from "styled-components";
import Breakpoints from "../Elements/breakpoints";
import IconInfo from "../../Assets/Millistig/index";
import { hellomoto } from "../Utilities/Animations";

function getSize() {
  return window.scrollY + window.innerHeight;
}

class LeftSideContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Array = [];
    this.state = {
      width: getSize(),
      count: 0
    };
  }

  handleResize = () => {
    this.setState({ width: getSize() });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleResize);
  }

  componentDidUpdate() {
    if (this.state.width > 700 && this.state.count === 0) {
      hellomoto(this.Array, false, 0.5, 0.2);
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    return (
      <Container>
        {this.state.width > 700 || this.state.count === 1
          ? IconInfo.map((values, index) => {
              return (
                <Information ref={c => (this.Array[index] = c)} key={index}>
                  <Images>
                    <Icon src={values.Pic} alt={`${values.Name}`} />
                  </Images>
                  <Text>{values.Name}</Text>
                </Information>
              );
            })
          : <Height300 />}
      </Container>
    );
  }
}

export default LeftSideContainer;

const Height300 = styled.div`
  width: 100%;
  height: 300px;
  `;

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
  height: 25px;
  width: 25px;
  display: block;
  @media (max-width: ${Breakpoints.portrait}px) {
    height: 20px;
    width: 20px;
  }
`;

const Images = styled.div`
  height: 50px;
  min-width: 50px;
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
