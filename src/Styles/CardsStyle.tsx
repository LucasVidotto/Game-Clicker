import styled from "styled-components";

const BaseCard = styled.div`
    display: flex;
    width: 60rem;
    height: 36rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    border: 4px solid #000;
    outline: 2px solid #fff;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1) 2px,
            transparent 2px,
            transparent 4px
        ); //cria efeito de riscado na tela
        z-index: 1;
        pointer-events: none;
    }
`;

export const CardBoxOne = styled(BaseCard)`
    backdrop-filter: blur(7px) saturate(120%);
    -webkit-backdrop-filter: blur(7px) saturate(120%);
    background: linear-gradient(145deg, rgba(128, 0, 128, 0.6), rgba(75, 0, 130, 0.8));
    border-radius: 16px;

    &::after {
        content: 'LEVEL UP';
        position: absolute;
        top: 8px;
        left: 8px;
        font-family: 'Press Start 2P', cursive;
        color: #fff;
        font-size: 1.2rem;
        z-index: 2;
    }
`;

export const CardBoxTwo = styled(BaseCard)`
    backdrop-filter: blur(7px) saturate(120%);
    -webkit-backdrop-filter: blur(7px) saturate(120%);
    background: linear-gradient(145deg, rgba(19, 219, 212, 0.6), rgba(0, 128, 128, 0.8));
    border-radius: 16px;

    &::after {
        content: 'BOOST MODE';
        position: absolute;
        top: 8px;
        left: 8px;
        font-family: 'Press Start 2P', cursive;
        color: #fff;
        font-size: 1.2rem;
        z-index: 2;
    }
`;