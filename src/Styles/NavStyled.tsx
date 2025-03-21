import styled from "styled-components";

export const NavbarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 4rem;
  gap: 1rem;
  z-index: 1000;
  background: transparent;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18%;
    height: 100%;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 1rem;
    cursor: pointer;
    background: linear-gradient(145deg, #ffd700, #b8860b);
    border: 2px solid #ffcc00;
    box-shadow: 0 0 10px #ffb300, 0 0 20px #ffcc00;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px #ffd700, 0 0 40px #ffcc00;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    & > div {
      width: 28%;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    width: 95%;

    & > div {
      width: 40%;
      font-size: 1rem;
    }
  }
`;