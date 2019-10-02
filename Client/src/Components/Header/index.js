import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Large, Small } from "../../Assets/Header/";
import Breakpoints from "../Elements/breakpoints";
import Blackbar from "./Blackbar";
import BigAssPicture from "./BigAssPicture";

export default function Index({ button, clicks, drawerClickHandler }) {
  return (
    <Header>
      <ThemeProvider theme={theme}>
        <Blackbar
          button={button}
          myClick={clicks}
          drawerClickHandler={drawerClickHandler}
        />
      </ThemeProvider>
      <BigAssPicture />
    </Header>
  );
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
  background-image: url(${Large});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  @media (max-width: ${Breakpoints.phone}px) {
    background-image: url(${Small});
    background-position: 85% 0px;
  }
`;
