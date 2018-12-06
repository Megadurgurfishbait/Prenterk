import React, {Component} from 'react';
import styled  from 'styled-components';
import Breakpoints from '../Elements/breakpoints';


export default class BigPicture extends Component {

      
      render() {
            const style = {backgroundImage: `url(${this.props.showPicture.img})`}
            return (
            <Container>
                  <Picture style={style} picture = {this.showPicture} />
            </Container>

            )
      }
}

const Container = styled.div`
    display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
    height: 100%;

      @media (max-width: ${Breakpoints.desktop}px){
            flex: 1 1 60%;
      }

            @media (max-width: ${Breakpoints.landscape}px){
            display:none;
      }
`;

const Picture = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50%;
    height: 50%;
    margin-top: -80px;

      @media (max-width: ${Breakpoints.desktop}px){
            width: 60%;
      }

      @media (max-width: ${Breakpoints.landscape}px){
            display: none;
      }
`;

