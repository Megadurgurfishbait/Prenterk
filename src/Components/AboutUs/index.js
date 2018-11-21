import React from 'react';
import styled from 'styled-components';
import CircleJerk from './CircleJerk';
import Map from './Map';


const AboutUs = () => (

      <Container>
            <CircleJerk/>

      </Container>


)
export default AboutUs;


const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120vh;
      width: 100vw;
      background-color: #231F20;
      margin-top: -300px;
      -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 18%, 100% 0, 100% 100%, 0% 100%);
`;


