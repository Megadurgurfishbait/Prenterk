import React, {Component} from 'react';
import styled from "styled-components";
import Card  from './Card';
import Breakpoints from '../Elements/breakpoints';

export default class Sixpictures extends Component  {
      render() {  
            return(
                  <Container > 
                        <Card onPointerOver={this.props.onPointerOver} />
                  </Container>
            )
      };

}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 80%;
    width: 100%;
    z-index: 10;
        @media (max-width: ${Breakpoints.landscape}px){
              width: 99%;
      }     
`;
