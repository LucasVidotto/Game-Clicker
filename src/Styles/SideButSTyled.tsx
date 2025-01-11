import styled from "styled-components";

export const BoxSide = styled.div<{statusGold : boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
  height: 34rem;
  background: linear-gradient(145deg, #2d2d2d, #3e3e3e);
  border-radius: 1rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.1);
  padding: 1rem;
  & > div{
    &:nth-child(1):hover{
      background: ${(props) => (props.statusGold ? "" : "linear-gradient(145deg, #e71e07, #620906);")}
    }
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(145deg, #ffcc00, #ffdd33);
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.9rem; //tamanho do card Type
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

export const GoldDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
  border-radius: 0.5rem;
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4), inset -2px -2px 6px rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  color: gold;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.6);
  margin: 0.5rem 0;
`;
