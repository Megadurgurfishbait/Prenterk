import React from "react";
import styled from "styled-components";

import { Large, Small } from "../../Assets/Header/";
import Breakpoints from "../Elements/breakpoints";
import Blackbar from "./Blackbar";
import BigAssPicture from "./BigAssPicture";
import { handleAnimationIntroLong } from "../Utilities/Animations";


export default function Index({ button, clicks, drawerClickHandler }) {
  let menuRef = React.createRef();
  let TitleText1 = React.createRef();

  React.useEffect(() => {
    handleAnimationIntroLong(menuRef.current, TitleText1.current);
  }, []);

  return (
    <Header>
      <Blackbar
        ref={menuRef}
        button={button}
        myClick={clicks}
        drawerClickHandler={drawerClickHandler}
      />
      <BigAssPicture
        ref={TitleText1}
      />
    </Header>
  );
}
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
