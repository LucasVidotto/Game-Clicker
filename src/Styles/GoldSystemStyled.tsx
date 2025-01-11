import styled from "styled-components";

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 20rem;
  background: linear-gradient(145deg, #1e1e1e, #511919);
  border-radius: 1.5rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
`;

export const StyledTitle = styled.h2<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "gold" : "#fff")};
  font-size: ${(props) => (props.isActive ? "2rem" : "1.8rem")};
  text-shadow: ${(props) => (props.isActive ? "0px 0px 10px gold" : "none")};
  transition: all 0.5s ease;
`;

export const GoldDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background: linear-gradient(145deg, #1f1f1f, #2d2d2d);
  border-radius: 0.8rem;
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4), inset -2px -2px 6px rgba(255, 255, 255, 0.1);
  font-size: 2rem;
  color: gold;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.6);
  margin: 1rem 0;
`;

export const StyledButton = styled.button`
  background: linear-gradient(145deg, #ffcc00, #ffdd33);
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.8rem;
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




/* export const StyledTitle = styled.h2<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "gold" : "red")};
  font-size: ${(props) => (props.isActive ? "1.5rem" : "1.3rem")};
  transition: all 0.9s ease;
`; */
