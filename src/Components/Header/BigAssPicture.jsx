import React from 'react';
import styled from 'styled-components';

const BigAssPicture = () => (
    <BigTitleDiv>
        <h1> Prentverk Selfoss </h1>
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