import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ListItems from './ListItems';
import ProdExamples from './ProdExamples';
import Breakpoints from '../Elements/breakpoints';


export default class Products extends Component  {

      constructor(props) {
            super(props);
            this.state = {
              show: "",
              on: false
            }
          }

          handleOnClick = (e) => {
            this.setState({show: e.target.id});
            this.setState({on: !this.state.on});
          }

      render() {

            return (
                  <Container >
                        <Header/>
                        <AllItems>
                              <ListItems clicks={this.handleOnClick} />
                              <ProdExamples myRef={this.state.show} iClicked ={this.state.on}/>
                        </AllItems>
                  </Container>
            )
      }
}
const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100vw;
      background-color:#231F20;
      -webkit-clip-path: polygon(0 15%, 100% 0, 100% 90%, 0% 100%);
      clip-path: polygon(0 15%, 100% 0, 100% 90%, 0% 100%);
      margin-top: -100px;
      margin-bottom: -150px;

            @media (max-width: ${Breakpoints.portrait}px){
                  -webkit-clip-path: polygon(0 21%,100% 0,100% 80%,0% 100%);
                  clip-path: polygon(0 14%,100% 0,100% 80%,0% 100%);
                  height: 120vh;
      }

            @media (max-width: ${Breakpoints.phone}px){
                  -webkit-clip-path: polygon(0 10%,100% 0,100% 91%,0% 100%);
                  clip-path: polygon(0 10%,100% 0,100% 91%,0% 100%);
                  height: 100vh;
      }
`;

const AllItems = styled.div`
      display: flex;
      height: 100%;
      width: 100%;

      @media (max-width: ${Breakpoints.portrait}px){
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
            position: relative;

      }


`;
