import React from 'react';
import styled from 'styled-components'


const Input = (props) => (
      <Container>
            <H4>{props.name}</H4>
            {props.name === "Email" ? <InputItem onChange={props.change}  type="email" id={props.name} />:<InputItem onChange={props.change}  id={props.name} />  }
      </Container>
)


export default Input;

const Container = styled.div`
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      min-height: 55px;
      justify-content: space-around;
      align-items: center;
`;
const H4 = styled.h2`
      display: flex;
      flex: 1 1 25%;
`;

const InputItem = styled.input`
      border: none;
      min-height: 35px;
      border-radius: 10px;
      display: flex;
      flex: 1 1 65%;
      padding: 5px;
      overflow:hidden;
`;