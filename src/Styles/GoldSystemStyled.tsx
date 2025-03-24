import styled, { keyframes } from "styled-components";

const flowup = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0);
  }
  100%{
    opacity: 0;
    transform: translateY(-100%);
  }
`

export const Particle = styled.div`
  position:absolute;
  color:gold;
  font-size:1.8rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  animation: ${flowup} 1s ease-out;
  left: 50%;
  transform: translateX(-50%);
`

// Animação de pulsar (efeito para destacar o card ativo)
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 12px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 12px rgba(255, 215, 0, 0.4); }
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #1a1a1a 20%, #000 80%);
  overflow: hidden;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32rem;
  height: 24rem;
  background: linear-gradient(145deg, #2e1e1e, #511919);
  border-radius: 2rem;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.6), -4px -4px 12px rgba(255, 255, 255, 0.1);
  padding: 2rem;
  position: relative;
  transform: translateY(-3rem); /* Ajustando posição vertical */
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-5rem) scale(1.05);
    box-shadow: 0 0 25px rgba(255, 204, 0, 0.9);
  }
`;

export const StyledTitle = styled.h2<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "gold" : "#fff")};
  font-size: ${(props) => (props.isActive ? "2.4rem" : "2rem")};
  text-shadow: ${(props) =>
    props.isActive ? "0px 0px 18px gold" : "0px 0px 8px rgba(255, 255, 255, 0.5)"};
  animation: ${(props) => (props.isActive ? pulseGlow : "none")} 2.5s infinite;
  transition: all 0.5s ease;
`;

export const GoldDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 5rem;
  background: linear-gradient(145deg, #282828, #3a3a3a);
  border-radius: 1rem;
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5), inset -3px -3px 8px rgba(255, 255, 255, 0.1);
  font-size: 2.5rem;
  color: gold;
  font-weight: bold;
  text-shadow: 0px 0px 12px rgba(255, 215, 0, 0.8);
  margin: 2rem 0;
`;

export const StyledButton = styled.button`
  background: linear-gradient(145deg, #ff4500, #ffdd33);
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5), -3px -3px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 6px 6px 18px rgba(255, 140, 0, 0.8);
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
  }
`;
