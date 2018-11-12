import React, { Component } from 'react'
import styled  from 'styled-components';

import BigPicture from './BigPicture';
import LeftSideContainer from './Leftsidecontainer';

export default class Background extends Component {


    render() {

        return (
            <BackgroundContainer>
                <LeftSideContainer />
                <BigPicture />
            </BackgroundContainer>
        )
    }
}


const BackgroundContainer = styled.div`
    display: flex;
    height: 500px;
    width: 100vw;
    background-color: lightgray;
    -webkit-clip-path: polygon(0 21%, 100% 0, 100% 75%, 0% 100%);
    clip-path: polygon(0 21%, 100% 0, 100% 75%, 0% 100%);
    position: relative;
    margin-top: -130px;


`;


