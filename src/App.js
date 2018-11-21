import React, { Component } from "react";
import Header from "./Components/Header";

import "./App.css";
import Background from "./Components/Millistig/Background";
import Products from "./Components/Products";
import Millimynd from "./Components/Millimynd";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  handleOnClick = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <Header clicks={this.handleOnClick} />
        <Background />
        <Products />
        <Millimynd />
        <AboutUs />
        <Footer />
        {this.state.show ? <Modal clicks={this.handleOnClick}  /> : null}
      </div>
    );
  }
}

export default App;
