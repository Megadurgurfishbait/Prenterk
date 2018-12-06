import React from 'react';
import styled from 'styled-components';
import CircleJerk from './CircleJerk';
import Breakpoints from '../Elements/breakpoints';


export default class AboutUs extends React.Component {
      render() {
            return (
                  <Container>
                        <CircleJerk/>
                  </Container>
            )
      }
}

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100vw;
      background-color: #231F20;
      margin-top: -300px;
      -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
      position: relative;

            @media (max-width: ${Breakpoints.phone}px){
                  -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
                  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0% 100%);
            }
`;


