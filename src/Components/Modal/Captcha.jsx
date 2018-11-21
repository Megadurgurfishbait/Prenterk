import React from 'react';
import styled from "styled-components";
import Safe from "react-recaptcha"; 



const Captcha = () => (


      <Container>
            <Safe
            sitekey="6Ld6PnsUAAAAABbV7o7K3iB8Twx6J83mK1m8r-51"
            theme="dark"
            />
      </Container>


)

export default Captcha;


const Container = styled.div`
      display:flex;
      justify-content: center;
      height: 35%;
      width: 100%;
      z-index: 500000;
`;