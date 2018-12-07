import React, {Component} from 'react';    
import styled from 'styled-components';
import Breakpoints from '../Elements/breakpoints';
import Items from './Items';


export default class ListItems extends Component {

      render() {
            return (
                  <Container>
                        <Items myClick={this.props.clicks}/>
                  </Container>
            )
      }
}


const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex: 1 1 20%;
      height: 70%;
      min-height: 400px;

       @media (max-width: ${Breakpoints.landscape}px){
             height: 100%;
             text-align: flex-start;
      }

      @media (max-width: ${Breakpoints.portrait}px){
            flex-flow: nowrap row;
            min-height: 0px;
            max-height: 20px;
            margin-top: 50px;
            width: 90%;
      }

      @media (max-width: ${Breakpoints.phone}px){
            flex-flow: wrap row;
            min-height: 100%;
            width: 100%;
            align-items: stretch;
            justify-content: space-evenly;

      }
`;
