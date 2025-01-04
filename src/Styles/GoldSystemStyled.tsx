import styled from "styled-components";

export const BoxMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    width: 28rem;
    height: 14rem;
    background-color: green;
        
`;

export const StyledTitle = styled.h2<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "gold" : "red")};
  font-size: ${(props) => (props.isActive ? "1.5rem" : "1.3rem")};
  transition: all 0.9s ease;
`;

export const BoxLife = styled.div`
    display: flex;
    width: 90%;
    height: 3rem;
    margin-top: 0.5rem;
    background-color: pink;
    border-radius: 1rem;
    overflow: hidden; /* Garante que o conteúdo da barra não ultrapasse os limites */
    position: relative;
`;

export const BarLife = styled.div<{ width: number }>`
    position: absolute;
    right: 0; /* Faz a barra começar do lado direito */
    height: 100%;
    width: ${(props) => props.width}%;
    background-color: blue;
    border-radius: 1rem 0 0 1rem; /* Borda arredondada na esquerda */
    transition: width 0.3s ease-in-out;
`;
