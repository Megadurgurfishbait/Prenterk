import React, {Component} from 'react';    
import styled from 'styled-components';
import Images from './Images';
import nafnspjold from '../../Assets/Products/nafnspjold';
import reikningar from '../../Assets/Products/reikningar';
import jolakort from '../../Assets/Products/jolakort';

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
      height: 100%;

`;

