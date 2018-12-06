import React, {Component} from 'react';    
import styled from 'styled-components';
import Images from './Images';
import nafnspjold from '../../Assets/Products/nafnspjold';
import reikningar from '../../Assets/Products/reikningar';
import jolakort from '../../Assets/Products/jolakort';
import Breakpoints from '../Elements/breakpoints';
// Stjórnar því hvaða myndir verða sýndar hægra meginn á vöru skjánum.


export default class ProdExamples extends Component {

      renderMyText = () => {
            switch(this.props.myRef){
                  case "Reikningar":
                        return (<Images myImages ={reikningar} wasClicked={this.props.wasClicked}/>);
                  case "Jolakort":
                        return (<Images myImages={jolakort} wasClicked={this.props.wasClicked}/>);
                  default:
                        return (<Images myImages ={nafnspjold} wasClicked={this.props.wasClicked}/>);
            }     
          }
          
      render() {
            return(
                  <Container>
                        {this.renderMyText()}
                  </Container>
            )
      }
}

const Container = styled.div`
      display: flex;
      flex: 1 1 70%;    
      justify-content: flex-start;

      @media (max-width: ${Breakpoints.landscape}px){
            flex: 1 1 60%;

      }

      @media (max-width: ${Breakpoints.portrait}px){
            min-width: 90%;
            flex: 1 1 100%;
            align-items: flex-start;
            height: 50%;
      }

      @media (max-width: ${Breakpoints.phone}px){
            height: 70%;
            position: absolute;
            margin-right: 0;
            margin-left: 0;
            right: 0;
            left: 0;
            top: 60px;
            
      }
`;

