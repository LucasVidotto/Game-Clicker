import styled, { keyframes } from 'styled-components';


const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BoxUpdated = styled.div`
    display: flex;
    width:100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    column-gap: 6rem;
   /*  row-gap: 2rem; */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
`
export const  CardContainer = styled.div`
    perspective: 1000px; //Dá a perspectiva 3D para o efeito  de flip
    width: calc(22% - 1em);
    height: 16rem;
`

export const CardUpdated = styled.div`
    display: flex;
    width:100%;
    height:100%;
    transform-style: preserve-3d; //Garante que os elementos filhos sejam renderizados em 3D.
    transition: transform 0.6s ease-in-out;

    &:hover{
        transform: rotateY(180deg);
    }
`

export const CardFront = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    backface-visibility: hidden; //Esconde o verso quando a frente está visivel
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;

`

export const CardBack = styled.div<{firstup:boolean}>`
    position: absolute;
    width:100%;
    height:100%;
    backface-visibility: hidden;
    background-color: ${(props) => (props.firstup ? "white" : "red" )};
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transform: rotateY(180deg); /* Define a rotação do verso */
`

