import React from "react";
import styled from "styled-components";
import { TimelineMax, TweenMax } from "gsap/all";
import scrollToComponent from "react-scroll-to-component";
import Breakpoints from "../Elements/breakpoints";


class AbsoluteList extends React.Component {
  constructor(props) {
    super(props);
    this.Group = [];
    this.container = null;
    this.tl = new TimelineMax();
    this.state = { width: 0, height: 0, show: false };
  }

  scrollDown = () => {
    scrollToComponent(this.Group[2], {
      align: "top",
      duration: 1000,
      ease: "linear"
    });
  };
  componentDidMount() {
    this.setState({
      show: this.props.show
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth <= 520) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  componentDidUpdate(prevProps) {
    let showOrRemoveOverlay = "50vw";

    if (prevProps.show !== this.props.show) {
      if (this.state.show) {
        showOrRemoveOverlay = "0vw";
      }
      let tl = this.tl;
      if (this.props.show) {
        tl.add(
          TweenMax.fromTo(
            [this.props.heightContainer, this.props.byeContainer],
            1,
            { height: "20vh" },
            { height: "40vh", onComplete: () => this.scrollDown() }
          )
        );
        tl.add(
          TweenMax.fromTo(
            this.props.byeContainer,
            1,
            { width: "100vw" },
            { width: `${showOrRemoveOverlay}` }
          )
        );
        tl.add(
          TweenMax.staggerFromTo(
            this.Group,
            0.6,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1 },
            0.2
          )
        );
      } else {
        tl.add(
          TweenMax.fromTo(
            this.props.byeContainer,
            1,
            { width: `${showOrRemoveOverlay}` },
            { width: "100vw" }
          )
        );
        tl.add(
          TweenMax.staggerFromTo(
            this.Group,
            0.6,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1 },
            0.2
          )
        );
        tl.add(
          TweenMax.fromTo(
            [this.props.heightContainer, this.props.byeContainer],
            1,
            { height: "40vh" },
            { height: "20vh" }
          )
        );
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    let show;
    if (this.props.show || this.state.show) {
      show = true;
    } else {
      show = false;
    }

    return (
      <Container
        direction={show ? show : undefined}
        ref={c => (this.container = c)}
      >
        {this.props.Info.map((values, index) => {
          return (
            <Group
              direction={show ? show : undefined}
              ref={c => (this.Group[index] = c)}
              key={index}
            >
              <TextContainer>
                <Text>{values.Info1}</Text>
                <Text>{values.Info2}</Text>
              </TextContainer>

              {!show ? (
                <>
                  <Line />
                  <Title>{values.Title}</Title>
                </>
              ) : (
                <Left>
                  <Image src={values.Icon} />
                </Left>
              )}
            </Group>
          );
        })}
      </Container>
    );
  }
}

export default AbsoluteList;

const Line = styled.div`
  margin: 15px auto;
  height: 3px;
  background-color: white;
  width: 100%;
  @media (max-width: ${Breakpoints.landscape}px) {
    margin: 3px auto;
  }
  @media (max-height: 400px) {
    height: 1px;
  }
`;

const Title = styled.h4`
  font-size: 22px;
  color: white;
  font-weight: 200;
  display: flex;
  width: 100%;
  margin: 0px auto;
  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 12px;
  }

  @media (max-height: 400px) {
    font-size: 10px;
  }
`;

const Left = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: ${Breakpoints.phone}px) {
    height: 30px;
    width: 30px;
  }
`;

const Container = styled.ul`
  margin: 0px;
  padding: 0px auto;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: ${props => (props.direction ? "column" : "row")};
  position: absolute;
  @media (max-width: ${Breakpoints.phone}px) {
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${Breakpoints.landscape}px) {
    justify-content: center;
    margin: 0px;
  }
`;

const Text = styled.h5`
  color: white;
  height: 40px;
  font-size: 30px;
  font-weight: 200;
  margin: 0px;
  padding: 0px;
  letter-spacing: 4.5px;

  @media (max-width: ${Breakpoints.desktop}px) {
    letter-spacing: 1.5px;
  }

  @media (max-width: ${Breakpoints.landscape}px) {
    font-size: 18px;
    height: 100%;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 12px;
  }

  @media (max-height: 400px) {
    font-size: 10px;
  }
`;

const Group = styled.li`
  transform: skew(-20deg);
  margin: 0px auto;
  text-align: left;
  list-style: none;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.direction ? "row-reverse" : "column")};
  align-items: center;

  @media (max-width: ${Breakpoints.desktop}px) {
    letter-spacing: 1.5px;
    margin: 0px;
  }

  @media (max-width: ${Breakpoints.landscape}px) {
    letter-spacing: 0px;
    margin: 0px;
  }
`;
