import React, {Component} from 'react';
import styled  from 'styled-components';



export default class BigPicture extends Component {

      
      render() {
            const style = {backgroundImage: `url(${this.props.showPicture.img})`}
            return (
            <Container>
                  <Picture style={style} picture = {this.showPicture} />
            </Container>

            )
      }
}

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
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50%;
    height: 50%;
    margin-top: -80px;
`;

