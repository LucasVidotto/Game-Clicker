import { BoxMain, Cards, StyledTitle, GoldDisplay, StyledButton, Particle } from "../../Styles/GoldSystemStyled";
import { useGoldStore } from "../../Store/Store";
import { useState } from "react";
import { useUpStore } from "../../Store/StoreUps";

export default function GoldSys() {
  const gold = useGoldStore((state) => state.gold);
  const incrementGold = useGoldStore((state) => state.incrementGold);
  const [particles, setParticles] = useState<number[]>([]);
  const {total_ups} = useUpStore();

  const hashPoint = () => {
    incrementGold();

    // Efeito de partícula ao clicar
    setParticles((prev) => [...prev, Date.now()]);

    // Limpar partículas antigas após 1s
    setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 1000);
  };

  return (
    <BoxMain>
      <Cards>
        <StyledTitle isActive={gold >= 20}>Gold System</StyledTitle>

        <GoldDisplay>Gold: {gold}</GoldDisplay>

        <StyledButton onClick={hashPoint}>Earn Gold</StyledButton>

        {/* Renderizar partículas */}
        {particles.map((p) => (
          <Particle key={p}>
            {total_ups == 1 ? (
              "+2"
            ) : total_ups == 2 ? 
              ("+4") :
              total_ups == 3 ? 
              ("+10") : 
              ("+1")}
          </Particle>
        ))}
      </Cards>
    </BoxMain>
  );
}