import React from 'react';
import styled from 'styled-components'

const BigInput = (props) => (
      <Container>
            <H4>{props.name}</H4>
            <InputItem onChange={props.change } id={props.name} />
      </Container>
)

export default BigInput;

const Container = styled.div`
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 100%;
      max-height: 300px;
      justify-content: space-around;
      align-items: flex-start;
      margin: .8rem 0rem;
`;

const H4 = styled.h2`
      display: flex;
      flex: 1 1 25%;
      margin: 0;

`;

const InputItem = styled.textarea`
      border: none;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex: 1 1 65%;
      padding: 5px;
`;


