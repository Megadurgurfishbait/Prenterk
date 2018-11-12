import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components';
import backgroundImage from '../../Assets/Header/imageedit_1_3949203845.jpg';
import Blackbar from './Blackbar';
import BigAssPicture from './BigAssPicture';


export default class Index extends Component {
  render() {
    return (
      <Header>
        <ThemeProvider theme={theme}>
          <Blackbar/>
        </ThemeProvider>
        <BigAssPicture/>
      </Header>
    )
  }
}

const theme = {
  main: '#231F20'
}

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    height: 130vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size:cover;
    background-repeat: no-repeat;
`;


