import React, {Component} from 'react';
import styled from "styled-components";
import Card  from './Card';

export default class Sixpictures extends Component  {


      _handleHovers = () => {
            console.log("FUCK")
      }
      
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
    height: 100%;
    width: 80%;
    z-index: 10;
`;
