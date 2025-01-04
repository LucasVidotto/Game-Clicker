import styled from "styled-components";
import image from '../assets/backroom.png'

export const BAckMenu = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    background-image: url(${image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity:0.51;
    
`
export const BoxGame = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
`
export const CardCenter = styled.div`
    display:flex;
    width:60rem;
    height:36rem;
    backdrop-filter: blur(1px) saturate(47%);
    -webkit-backdrop-filter: blur(1px) saturate(47%);
    background-color: rgba(17, 25, 40, 0.61);
    border-radius: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
`