import styled from "styled-components";

export const BoxMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(145deg, #1e1e1e, #2b2b2b); */
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30rem;
  height: 16rem;
  background: linear-gradient(145deg, #292929, #3c3c3c);
  border-radius: 1.5rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
`;

export const BoxLife = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 3.5rem;
  background: linear-gradient(145deg, #05ee0d, #0cd213);
  border-radius: 1.5rem;
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4), inset -2px -2px 6px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
`;

export const BarLife = styled.div<{ width: number }>`
  position: absolute;
  right: 0;
  height: 100%;
  width: ${(props) => props.width}%;
  background: linear-gradient(145deg, #e11717, #950d0d);
  border-radius: 1.5rem 0 0 1.5rem;
  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.4), inset -1px -1px 4px rgba(255, 255, 255, 0.1);
  transition: width 0.3s ease-in-out;s
`;

export const StyledTitle = styled.h2<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "gold" : "#fff")};
  font-size: ${(props) => (props.isActive ? "2rem" : "1.8rem")};
  text-shadow: ${(props) => (props.isActive ? "0px 0px 10px gold" : "none")};
  transition: all 0.5s ease;
  text-align: center;
`;

export const StyledButton = styled.button`
  background: linear-gradient(145deg, #ffcc00, #ffdd33);
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3), -2px -2px 6px rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 10px rgba(255, 204, 0, 0.6);
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;
