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
      height: 100%;

      & button {
            padding: 0;
            text-align: left;
            color: white;
            margin: .2rem 0rem;
            font-size: 1rem;
            height: 40px;
            width: 50%;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid transparent;
            transition: all .5s;
            transform: translateX(-20px);
            
            &:hover,
            &:active {
                  border: none;
                  border-bottom: 1px solid white;
                  transform: translateX(0px);
            }

            
      }
`;
