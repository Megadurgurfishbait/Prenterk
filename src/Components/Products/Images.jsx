import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

export default class Images extends Component {

      state = { isOpen: false };

      componentDidMount() {
            this.setState({ isOpen: !this.state.isOpen });
      }
      componentDidUpdate(prevProps) {
            // Typical usage (don't forget to compare props):
            if (this.props.myImages !== prevProps.myImages) {
              this.setState({isOpen: !this.state.isOpen})
            }
          }

      render() {
            return (  
                  <Fragment>
                         <Container >
                              <Try pose={this.state.isOpen ? 'visible' : 'hidden'}>
                                    {this.props.myImages.map(values =>
                                          { return (<ImageStyle  src={values}/>)}
                                    )}
                              </Try>
                              <Try pose={this.state.isOpen ? 'hidden' : 'visible'}>
                                    {this.props.myImages.map(values =>
                                          { return (<ImageStyle  src={values}/>)}
                                    )}
                              </Try>
                         </Container>
                  </Fragment>
            )
      }
}

const Container = styled.div`
      display: block;
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
`;

const Try = styled(posed.div({
      visible: { 
            opacity: 1,
            x: 0,
            transition: {
                  opacity: { ease: 'linear', duration:800, delay: 300 },
                  x: { ease: 'linear', duration: 800 }
                }
      },
      hidden: { 
            opacity: 0, 
            x: 50,
            transition: {
                  opacity: { ease: 'linear', duration: 1 },
                  x: { ease: 'linear', duration: 1 }
                }},
      
}))`
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      overflow: hidden;
`;


const ImageStyle = styled.img`
            display: block;
            max-height: 40%;
            max-width: 100%;
            overflow: hidden;
            object-fit: cover;
            transition: all  .5s; 
            border: 5px solid transparent;

            &:nth-child(3){
                  ${position("15%", "40%", 1, 0.6)}
                  /* Function for duplicate code */
                  &:hover { 
                        ${onHover} }
            }

            &:nth-child(2){
                  ${position("30%", "30%", 2, 0.8)}  
                  /* Function for duplicate code */
                  &:hover {
                        ${onHover}}
            }

            &:first-child {
                  ${position("10%", "20%", 3, 1)}
                  /* Function for duplicate code */
                  &:hover {
                        ${onHover}}
            }  
`;


/************** Assist GSS Functions ************** */
function onHover() {
      return `
            z-index: 4;
            opacity: 1;
            transform: scale(1.2);
            border: 5px solid lightgray;
      `;
}
    function position(top, left, zed, opacity){
      return `
      z-index: ${zed};
      opacity: ${opacity};
      position: absolute;
      top: ${top};
      left: ${left};
      `;
}



