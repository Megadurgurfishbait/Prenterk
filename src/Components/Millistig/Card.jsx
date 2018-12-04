import React, { Component, Fragment } from 'react';
import styled  from 'styled-components';
import Image1 from '../../Assets/Millistig/8806400_orig.jpg';
import Image2 from '../../Assets/Millistig/1-scs-printer-picture.jpg';
import Image3 from '../../Assets/Millistig/17000226941_8e7f2ce7cc_k.jpg';
import Image4 from '../../Assets/Millistig/Digital-Design-720x392.jpg';
import Image5 from '../../Assets/Millistig/tunnan-skirteini.jpg';
import Image6 from '../../Assets/Millistig/Umsl_g_.jpg';



export default class Card extends Component {
      state = {
            Img1: {img: `${Image1}`, title: "Aðgöngumiðar", description:"blernskfsdlf asldjfnsadkf sadfjsafknasdfjn sdafk sdf"},
            Img2: {img: `${Image2}`, title: "Ljósritun", description:"Við sjáum um að ljósrita fyrir þig heilu staflana af blöðum"},
            Img3: {img: `${Image3}`, title: "Bækur og tímarit", description:"blernskfsdasdasdlf asldjfnsadkf sadfjsafknasdfjn sdafk sdf"},
            Img4: {img: `${Image4}`, title: "Stafræn hönnun", description:"blernskfsdlf asldjfnsadkf sa22222dfjsafknasdfjn sdafk sdf"},
            Img5: {img: `${Image5}`, title: "Vinnustaðarskirteini", description:"blernskfsdlf asldjfnsad23333kf sadfjsafknasdfjn sdafk sdf"},
            Img6: {img: `${Image6}`, title: "Umslög", description:"blernskf23123123sdlf asldjfnsadkf sadfjsafknasdfjn sdafk sdf"}
      }

    render() {
      return (
        <Fragment >
            <ImageOne  onPointerOver={() => this.props.onPointerOver(this.state.Img1)}/>
            <ImageTwo  onPointerOver={ () => this.props.onPointerOver(this.state.Img2)}/>
            <ImageThree  onPointerOver={() => this.props.onPointerOver(this.state.Img3)}/>
            <ImageFour  onPointerOver={() => this.props.onPointerOver(this.state.Img4)}/>
            <ImageFive  onPointerOver={() => this.props.onPointerOver(this.state.Img5)}/>
            <ImageSix  onPointerOver={() => this.props.onPointerOver(this.state.Img6)}/>
        </Fragment>
      )
    }
  }

  const CardImage = styled.div`
    height: 100px;
    flex: 1 1 30%;
    margin: 3px 8px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid transparent;
      transition: all .5s linear;
    &:hover {
          border: 1px solid black;
          transform: scale(1.1);
          -webkit-box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
    }
  `;

const ImageOne = styled(CardImage)` background-image: url(${Image1}); `;
const ImageTwo = styled(CardImage)` background-image: url(${Image2}); `;
const ImageThree = styled(CardImage)` background-image: url(${Image3}); `;
const ImageFour = styled(CardImage)` background-image: url(${Image4}); `;
const ImageFive = styled(CardImage)` background-image: url(${Image5}); `;
const ImageSix = styled(CardImage)` background-image: url(${Image6}); `;
