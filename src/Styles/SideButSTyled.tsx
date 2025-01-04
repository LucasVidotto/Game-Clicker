import styled from "styled-components";

export const BoxSide = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    width: 4rem;
    height: 36rem;
    backdrop-filter: blur(1px) saturate(47%);
    -webkit-backdrop-filter: blur(1px) saturate(47%);
    background-color: rgba(17, 25, 40, 0.61);
    border-radius: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    gap:0.5rem;
     & > div{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 95%;
        height: 17%;
        border-radius: 0.7rem;
        background-color:transparent;
         & > button{
            display:flex;
            font-size: 12px;
            width: 98%;
            height: 96%;
            overflow: hidden; //Deixa oculto tudo que estiver fora do tamanho
            white-space:nowrap; //Evita a quebra de linha
            text-overflow:ellipsis; //adiciona ... se o texto for muito extenso
            border:1px solid rgba(255,255,255,0.6);
            background-color: transparent;
            cursor:pointer;
         }
     }
`