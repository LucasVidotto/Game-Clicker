import styled from "styled-components";
import { FaCoins, FaCubes, FaGem } from "react-icons/fa";
import Image from '../assets/image02.jpg';

export const BoxUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    backdrop-filter: blur(3px);
`;

export const CardCenter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 65rem;
    height: 40rem;
    gap: 0.8rem;
    backdrop-filter: blur(5px) saturate(120%);
    -webkit-backdrop-filter: blur(5px) saturate(120%);
    background: linear-gradient(145deg, rgba(10, 15, 25, 0.85), rgba(20, 30, 50, 0.9));
    border-radius: 1.2rem;
    border: 2px solid rgba(0, 255, 183, 0.3);
    box-shadow: 0 0 25px rgba(0, 255, 183, 0.5);

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(32% - 0.8rem);
        height: 10rem;
        background: linear-gradient(145deg, #001f29, #003d4d);
        border-radius: 0.7rem;
        box-shadow: 0 0 15px rgba(0, 255, 183, 0.4);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-8px) rotateY(10deg);
            box-shadow: 0 0 35px rgba(0, 255, 183, 0.8);
        }

        svg {
            font-size: 3rem;
            color: #00ffb7;
        }

        span {
            margin-top: 0.5rem;
            font-size: 1.2rem;
            color: #00ffb7;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;

export const UpgradeIcons = {
    coin: { icon: <FaCoins />, label: "1 → 2" },         // Primeira evolução
    coinsStack: { icon: <FaCubes />, label: "2 → 4" },   // Segunda evolução
    goldSystem: { icon: <FaGem />, label: "Gold System" }, // Link final
  };
