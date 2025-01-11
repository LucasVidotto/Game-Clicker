import styled from "styled-components";
import Image from '../assets/image02.jpg';

export const BoxUp = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    background-image : url(${Image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity:0.51;
    
`
export const CardCenter = styled.div`
    display:flex;
    flex-wrap: wrap;/* Permite que os itens quebrem para a próxima linha */
    justify-content: space-between; /* Espaçamento uniforme entre os itens */
    align-items:center;
    width:60rem;
    height:36rem;
    gap: 0.3rem;
    backdrop-filter: blur(1px) saturate(47%);
    -webkit-backdrop-filter: blur(1px) saturate(47%);
    background-color: rgba(17, 25, 40, 0.61);
    border-radius: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.125);

    & > div{
        display:flex;
        width : calc(33% - 0.3rem); //tira 0.3 que é do gap
        height: 8rem;
        background-color: blue;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
    }
`
