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
      min-height: 80vh;
      height: 100vh;
      width: 100vw;
      background-color:#231F20;

            @media (max-width: ${Breakpoints.portrait}px){
                  height: 120vh;
      }

            @media (max-width: ${Breakpoints.phone}px){
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
