import { keyframes } from "styled-components";

export const upDown = keyframes`
    0% { transform: translateY(0px);}
    50%{ transform: translateY(5px);}
    100% { transform: translateY(0px);}
`;

export const downUp = keyframes`
0% { transform: translateY(0px);}
50%{ transform: translateY(-5px);}
100% { transform: translateY(0px);}
`;

export const fadeOut = keyframes`
    0% { opacity:1 ;}
    100% {  opacity: 0 ;}
`;

export const fadeIn = keyframes`
    0% { opacity:0 ;}
    100% {  opacity: 1 ;}
`;

export const fadeFromRight = keyframes`

    0% { transform: translateX(-2000px);}
    100% { transform: translateX(0px);}
`;

export const fadeToRight = keyframes`

    0% { transform: translateX(0px);}
    100% { transform: translateX(2000px);}
`;

export const fadeLeft = keyframes`
    0% { transform: translateX(0px);}
    49%{ transform: translateX(-200px);}
    50%{ transform: translateX(200px);}
    100% { transform: translateX(0px);}
`;

export const getBiggerAndFadeRight = keyframes`
    0% { 
        transform: scale(1);
        opacity: 1;
    }
    70% { 
        transform: scale(5);
        opacity: 0;
        }
    71% {
        transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const getBiggerAndFadeLeft = keyframes`

    0% { 
        transform: scale(1);
        opacity: 1;
    }
    70% { 
        transform: scale(5);
        opacity: 0;
        }

    71% {
        transform: translateX(200px);
        opacity: 0;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }


`;

export const opacityChange = keyframes`

    0% { 
        opacity: 0;
        }
    100% {
        opacity: 1;
    }

`;
