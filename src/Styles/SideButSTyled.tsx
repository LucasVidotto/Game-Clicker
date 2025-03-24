import styled from "styled-components";

export const BoxSide = styled.div<{statusGold : boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
  height: 36rem;
  background: linear-gradient(145deg, #1a1a1a, #2b2b2b);
  border-radius: 1.5rem;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(255, 215, 0, 0.2);
  padding: 1rem;
  border: 2px solid gold;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 20%, transparent 60%);
    z-index: 0;
  }

  & > div {
    position: relative;
    z-index: 1;

    &:nth-child(1):hover {
      background: ${(props) => (props.statusGold ? "" : "linear-gradient(145deg, #ff4500, #8b0000);")}
    }
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(145deg, #ffd700, #ffbf00);
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid #ffbf00;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5), -2px -2px 8px rgba(255, 223, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-3deg);
    box-shadow: 6px 6px 12px rgba(255, 215, 0, 0.8), -4px -4px 12px rgba(255, 255, 255, 0.2);
    text-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
  }
`;

export const GoldDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background: linear-gradient(145deg, #2b2b2b, #3e3e3e);
  border-radius: 1rem;
  box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.5), inset -3px -3px 8px rgba(255, 215, 0, 0.2);
  font-size: 1.8rem;
  color: gold;
  font-weight: bold;
  text-shadow: 0px 0px 12px rgba(255, 223, 0, 0.9);
  border: 2px solid #ffd700;
  margin: 0.8rem 0;
`;
