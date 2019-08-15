import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "../../Assets/Header/BigPic2.jpg";
import Blackbar from "./Blackbar";
import BigAssPicture from "./BigAssPicture";

export default class Index extends Component {
  render() {
    return (
      <Header>
        <ThemeProvider theme={theme}>
          <Blackbar
            button={this.props.button}
            myClick={this.props.clicks}
            drawerClickHandler={this.props.drawerClickHandler}
          />
        </ThemeProvider>
        <BigAssPicture />
      </Header>
    );
  }
}

const theme = {
  main: "#231F20"
};

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-height: 600px;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
