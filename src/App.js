import React, { Component } from 'react';
import Header from './Components/Header';
import Card from './Components/Millistig/Card';
import './App.css';
import Background from './Components/Millistig/Background';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Background />
          {/* <Card /> */ }
          
      </div>
    );
  }
}

export default App;
