import React, {Component} from 'react';    
import styled from 'styled-components';

import Items from './Items';


export default class ListItems extends Component {

      render() {
            return (
                  <Container>
                        <Items myClick={this.props.clicks}/>
                  </Container>
            )
      }
}


const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 1 20%;
      height: 70%;
      min-height: 500px;

      & button {
            padding: 0;
            text-align: left;
            color: white;
            margin: 1rem 1rem;
            font-size: 1.6rem;
            height: 40px;
            width: 65%;
            background-color: transparent;
            border: none;
            border: 1px groove transparent;
            transition: all .5s;
            transform: translateX(-20px);
            text-align: center;
            white-space: nowrap;
            &:hover,
            &:active {
                  border: 1px groove transparent;
                  transform: translateX(0px);
            }

            &:focus {
                  background-color: #272525;
                  border: 1px groove white;
                  transform: scale(1.1);
                  outline: none;
                  border-radius: 10px;
            }
      }
`;
