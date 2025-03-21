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
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 3rem;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #e94560);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 12s ease infinite;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 60%);
  }
`;

export const CardContainer = styled.div`
  perspective: 1500px; 
  width: calc(22% - 1em);
  height: 20rem;
  min-width: 280px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(45% - 1em);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(145deg, #232526, #414345);
  color: #00ffc6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 255, 198, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 3px solid #00ffc6;
  text-shadow: 0 0 10px #00ffc6, 0 0 20px #00ffcc;
`;

export const CardBack = styled.div<{ firstup: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${(props) => (props.firstup ? 'linear-gradient(145deg, #ffcc29, #ffa726)' : 'linear-gradient(145deg, #ff004d, #a80038)')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  transform: rotateY(180deg);
  border-radius: 20px;
  box-shadow: ${(props) => (props.firstup ? '0 12px 24px rgba(255, 204, 41, 0.6)' : '0 12px 24px rgba(255, 0, 77, 0.6)')};
  border: 3px solid ${(props) => (props.firstup ? '#ffcc29' : '#ff004d')};
`;

export const CardUpdated = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;

  &:hover {
    transform: rotateY(180deg);
  }

  &:hover ${CardFront}, &:hover ${CardBack} {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.7);
  }
`;