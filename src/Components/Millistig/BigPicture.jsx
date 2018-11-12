import React from 'react';
import styled  from 'styled-components';
import BigPic from '../../Assets/Millistig/1-scs-printer-picture.jpg'


const BigPicture = () => (

    <Container>
       <Picture/>
    </Container>
)

export default BigPicture;


const Container = styled.div`
    display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
    height: 100%;
`;


const Picture = styled.div`
    background-image: url(${BigPic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    width: 50%;
    height: 50%;
    margin-top: -80px;
`;



