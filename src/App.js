import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import Background from "./Components/Millistig/Leftsidecontainer";
import Products from "./Components/Products";
import Millimynd from "./Components/Millimynd";
import AboutUs from "./Components/AboutUs";
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Modal from "./Components/Modal";
import scrollToComponent from 'react-scroll-to-component';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Lato', sans-serif !important;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () =>{
      console.log("LOL");
      this.setState((prevState) =>{
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
      });
      
};

    _scrollToDiv = (e) => {
          switch(e.target.id) {
                case "vorur":  
                        scrollToComponent(this.Products, { offset: -80, align: 'top', duration: 1500})
                        break;
                default: 
                        scrollToComponent(this.AboutUs, { offset: 0, align: 'top', duration: 1500});
          }
     
    }

  handleOnClick = e => {
    this.setState({
      show: !this.state.show
    });
  };


  render() {
    return (
      <AppDiv>
        <Header clicks={this.handleOnClick} button={this._scrollToDiv} drawerClickHandler={this.drawerToggleClickHandler} />
        <Background />
        <Products ref={(section) => { this.Products = section; }} />
        <Millimynd />
        <AboutUs ref={(section) => { this.AboutUs = section; }} />
        {this.state.show ? <Modal clicks={this.handleOnClick}  /> : null}
        <SideDrawer 
            drawerClickHandler={this.drawerToggleClickHandler}  
            show={this.state.sideDrawerOpen} 
            button={this._scrollToDiv} 
            myClick={this.handleOnClick} />
      </AppDiv>
    );
  }
}

export default App;


const AppDiv = styled.div`

  text-align: center;
  height: 100%;
  width: 100%;
  font-family: 'Lato', sans-serif !important;
  position: relative;
`;