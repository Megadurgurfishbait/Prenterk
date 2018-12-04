import React from 'react';
import styled from 'styled-components';

const GunnarInfo = (props) => (
      <Container>
            <Title> Um Gunnar Óðinn Gunnarsson</Title>
            <TextContainer>
                  <Sides fontSize>
                        <Text>Phasellus quis dui id magna aliquet sollicitudin.</Text>
                        <Text>Nulla tincidunt metus at sagittis porttitor.</Text>
                        <Text>Pellentesque sollicitudin elit nec quam dapibus, sed finibus neque congue.</Text>
                  </Sides>
                  <Sides>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus imperdiet urna, sit amet laoreet lectus. Etiam at leo in sem pellentesque faucibus. Mauris ultricies aliquet ipsum ac luctus. Morbi consectetur finibus sapien, at fringilla arcu hendrerit nec. Nunc dui urna, varius ut quam et, venenatis ultricies ex. Ut at porttitor augue, ac pretium lorem. Sed placerat posuere arcu, a elementum nibh cursus eget.</Text>
                  </Sides>
            </TextContainer>
      </Container>
)


export default GunnarInfo;

const Sides = styled.div`
      display: block;
      height: 100%;
      min-height: 250px;
      width: 50%;
      font-size: ${props => props.fontSize ? "20px" : "10px"};
      
`;

const TextContainer = styled.div`
      display:flex;
      flex-direction: row;
      flex-wrap: nowrap;
      text-align: center;
`;


const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      height: 100%;
      margin: 15px;
      font-size: 12px;
      flex: 1 1 60%;
      max-width: 65%;
      color: white;
`;
const Title = styled.h1`
      margin: 1rem 1rem;
      font-size: 2rem;
      text-align: center;
      letter-spacing: 4px;
      text-shadow: 1px 1px gray;
`;
const Text = styled.p`
      margin: .5rem .5rem;
`;
