import React from 'react';
import styled from 'styled-components';
import {Spring} from 'react-spring';

const BigAssPicture = () => (
    <BigTitleDiv>
            <Spring 
                delay={500}
                from={{ opacity: 0, transform: 'translate3d(0,-40px,0)'}} 
                to={{ opacity: 1, transform: 'translate3d(0,0px,0)'}}
                >
                  {({opacity, transform}) => (
                        <h1 style={{opacity, transform}}> Prentverk Selfoss </h1>
                  )}
            </Spring>
    </BigTitleDiv>
);

export default BigAssPicture;


const BigTitleDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;

  & > h1 {
    display:block;
    font-size: 7rem;
    color: ${props => props.theme.main};
    font-weight: 800;
    letter-spacing: 7px;
  }
`;