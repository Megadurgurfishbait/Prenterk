import React, { Component } from 'react';
import styled  from 'styled-components';
import Image1 from '../../Assets/Millistig/8806400_orig.jpg';

export default class Card extends Component {
    render() {
      return (
        <CardContainer>
            <CardImage/>
        </CardContainer>
      )
    }
  }

  const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100px;
    background-color: gray;
  `;

  const CardImage = styled.div`
    height: 95%;
    width: 95%;

    background-image: url(${Image1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
  
  `;