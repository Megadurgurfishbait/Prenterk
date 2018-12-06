import React, { Component } from 'react'
import styled  from 'styled-components';
import BigPicture from './BigPicture';
import LeftSideContainer from './Leftsidecontainer';
import BigPic from '../../Assets/Millistig/1-scs-printer-picture.jpg';
import Breakpoints from '../Elements/breakpoints';


export default class Background extends Component {
      
      state = {
            pictureId:  {img: `${BigPic}`, title: "Ljósritun", description:"Við sjáum um að ljósrita fyrir þig heilu staflana af blöðum"}
      };


      _handleHover = (numbero) => {
            this.setState({
                  pictureId: numbero
            });
      }    
    render() {
        return (
            <BackgroundContainer>
                <LeftSideContainer values={this.state.pictureId} push={this._handleHover} />
                <BigPicture showPicture={this.state.pictureId} />
            </BackgroundContainer>
        )
    }
}


const BackgroundContainer = styled.div`
    display: flex;
    height: 600px;
    width: 100vw;
    background-color: white;
    -webkit-clip-path: polygon(0 25%, 100% 0, 100% 85%, 0% 100%);
    clip-path: polygon(0 22%, 100% 0, 100% 85%, 0% 100%);
    position: relative;
    margin-top: -150px;

      @media (max-width: ${Breakpoints.portrait}px){

              clip-path: polygon(0 16%, 100% 0, 100% 85%, 0% 100%);
      }   

      @media (max-width: ${Breakpoints.phone}px){
            height: 700px;
            clip-path: polygon(0 11%, 100% 0, 100% 85%, 0% 100%);
      }   
`;


