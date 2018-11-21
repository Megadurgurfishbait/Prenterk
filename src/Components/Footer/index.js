import React from 'react';    
import styled from 'styled-components'
import Logo from '../Elements/Logo';


const Footer = () => (
      <Blackbar>
            <Logo left />
      </Blackbar>
)

export default Footer;


const Blackbar = styled.div`
      display: flex;
      flex: 1 1 100%;
      height: 100px;
      border:none;
`;

