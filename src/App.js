import React, { Component } from "react";
import Header from "./Components/Header";

import "./App.css";
import Background from "./Components/Millistig/Background";
import Products from "./Components/Products";
import Millimynd from "./Components/Millimynd";
import AboutUs from "./Components/AboutUs";

import Modal from "./Components/Modal";
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

    _scrollToDiv = (e) => {
          switch(e.target.id) {
                case "vorur":  
                        scrollToComponent(this.Products, { offset: 0, align: 'top', duration: 1500})
                        break;
                default: 
                        scrollToComponent(this.AboutUs, { offset: -20, align: 'center', duration: 1500});
                        console.log("HER111")
          }
     
    }

  handleOnClick = e => {
    this.setState({
      show: !this.state.show
    });
  };


  render() {
    return (
      <div className="App">
        <Header clicks={this.handleOnClick} button={this._scrollToDiv} />
        <Background />
        <Products ref={(section) => { this.Products = section; }} />
        <Millimynd />
        <AboutUs ref={(section) => { this.AboutUs = section; }} />
        {this.state.show ? <Modal clicks={this.handleOnClick}  /> : null}
      </div>
    );
  }
}

export default App;
