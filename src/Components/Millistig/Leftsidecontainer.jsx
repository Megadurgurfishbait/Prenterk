import React from 'react'
import styled  from 'styled-components';
const LeftSideContainer = () => (


    <Container>
        <AllItems>
            <TextSixPictures>
                <ItemHeading> Printing Jub</ItemHeading>
                <ItemText> Sfnsdkfnskdfn ksdnkjsdnfkjnsdfsdfkjsndfkj nskjdfn sjkdnfkjsdnfksnfjknsdf</ItemText>
            </TextSixPictures>

        </AllItems>

    </Container>

)



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;
    height: 100%;
    margin-left: 5%;
`;

const TextSixPictures = styled.div`
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    justify-content: flex-start;
    height: 30%;
`;

const ItemHeading = styled.h1`
    position: relative;
    padding-top: 50px;
    margin: 0;
    height: 30%;
    width: 100%;
    text-align: left;
`;

const ItemText = styled.p`
    text-align: left;

`;

const AllItems = styled.div`
    display: flex;

    height: 75%;
    width: 75%;
`;



export default LeftSideContainer;