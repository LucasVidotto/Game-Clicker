import { BoxMain, Cards, StyledTitle, GoldDisplay, StyledButton } from "../../Styles/GoldSystemStyled";
import { useGoldStore } from "../../Store/Store";
export default function GoldSys() {
  const gold = useGoldStore((state) => state.gold);
  const incrementGold = useGoldStore((state) => state.incrementGold);

  const hashPoint = () => {
    incrementGold();
  };

  return (
    <BoxMain>
      <Cards>
        <StyledTitle isActive={gold >= 20}>Gold System</StyledTitle>
        {/* <StyledTitle isActive={statusPoint}>Gold System</StyledTitle> */} {/* mudança de cor após liberado (20 pontos +) */}
        <GoldDisplay>Gold: {gold}</GoldDisplay>
        <StyledButton onClick={hashPoint}>Earn Gold</StyledButton>
      </Cards>
    </BoxMain>
  );
}

