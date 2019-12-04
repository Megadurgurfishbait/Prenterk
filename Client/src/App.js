import React, { useState, createRef, Suspense } from "react";
import scrollToComponent from "react-scroll-to-component";
import styled, { createGlobalStyle } from "styled-components";

import {
  Millimynd,
  Break,
  SideDrawer,
  UmGunnar,
  Upplysingar,
  LeftSideContainer
} from "./Components";

const Header = React.lazy(() => import("./Components/Header"));
const Showcase = React.lazy(() => import("./Components/synihlutir/"));

const GlobalStyles = createGlobalStyle`
html {
  overflow-x: hidden;
}
  body {
    margin: 0;
    font-family: 'Roboto', serif !important;
  }
`;

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  let ProductsRef = createRef();
  let GunnsoRef = createRef();
  let ShowcaseRef = createRef();

  const drawerToggleClickHandler = e => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const _scrollToDiv = e => {
    switch (e.currentTarget.id) {
      case "vorur":
        scrollToComponent(ProductsRef.current, { duration: 1500 });
        break;
      case "umOkkur":
        scrollToComponent(GunnsoRef.current, { duration: 1500 });
        break;
      case "synishorn":
        scrollToComponent(ShowcaseRef.current, { duration: 1000 });
        break;
      default:
        return ProductsRef;
    }
  };
  return (
    <AppDiv>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          button={_scrollToDiv}
          drawerClickHandler={drawerToggleClickHandler}
        />
      </Suspense>

      <Break />
      <LeftSideContainer ref={ProductsRef} />
      <Break />
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase ref={ShowcaseRef} />
      </Suspense>
      <Break />
      <Millimynd />
      <Break />
      <UmGunnar />
      <Break />
      <Upplysingar ref={GunnsoRef} />
      <SideDrawer
        drawerClickHandler={drawerToggleClickHandler}
        show={sideDrawerOpen}
        button={_scrollToDiv}
      />
    </AppDiv>
  );
};

export default App;

const AppDiv = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  height: 100%;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
