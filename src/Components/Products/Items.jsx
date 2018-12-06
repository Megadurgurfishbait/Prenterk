import React, {Component, Fragment} from 'react';
import Breakpoints from '../Elements/breakpoints';
import styled from 'styled-components';


export default class Items extends Component {


      renderMyText = () => {
            // Listi af tenglum fyrir Vörur listann. 
            const list = [
                  {id: "Nafnspjold", name: "Nafnspjöld", posTop: true},
                  {id: "Reikningar", name: "Reikningar", posTop: true},
                  {id: "Jolakort", name: "Jólakort", posTop: true},
                  {id: "Salmaskrar", name: "Sálmaskrár", posTop: false},
                  {id: "BlodOgTimarit", name: "Tímarit", posTop: false},
                  {id: "Bodskort", name: "Boðskort", posTop: false}
            ];


      
                  return(list.map((values, index) => (
                        <Button key={index} id={values.id} onClick={this.props.myClick} posTop={values.posTop}>  {values.name} </Button>
                  )))
          }

      render() {
            return (
                  <Fragment>
                        {this.renderMyText()}
                  </Fragment>
            )
      }
}


const Button = styled.button`
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
            transition: transform  .5s ease;
            transform: translateX(-20px);
            text-align: center;
            white-space: nowrap;
            z-index: 1;



            @media (max-width: ${Breakpoints.landscape}px){
                  width: 80%;
                  text-align:left;
                  padding: 0rem 1rem;
            }

            @media (max-width: ${Breakpoints.portrait}px){
                  padding: 0rem .3rem;
                  font-size: 1rem;
                  margin: .1rem .1rem;
                  transform: translateY(-10px);
                  text-align: center;
            }

            @media (max-width: ${Breakpoints.phone}px){
                  align-self: ${props => props.posTop ? "flex-start" : "flex-end" };
                  margin: 0px 3px;
                  margin-bottom: ${props => props.posTop ? 0 : "170px" };
                  width: 30%;
                  transform: ${props => props.posTop ? "translateY(-10px)" : "translateY(10px)" }; 

                  padding: 0;
            }

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


                  @media (max-width: ${Breakpoints.phone}px){
                        transform: scale(1.05);
            }
            }
      


`;