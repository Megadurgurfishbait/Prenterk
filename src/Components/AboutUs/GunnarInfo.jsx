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
      min-height: 300px;
      width: 50%;
      font-size: ${props => props.fontSize ? "20px" : "10px"};
`;

const TextContainer = styled.div`
      display:flex;
      flex-direction: row;
      flex-wrap: nowrap;
`;


const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin: 15px;
      font-size: 12px;
      color: white;
`;
const Title = styled.h1`
      margin: 2rem 1rem;
      font-size: 2.6rem;
      white-space: nowrap;
`;
const Text = styled.p`
      margin: .5rem .5rem;
`;
