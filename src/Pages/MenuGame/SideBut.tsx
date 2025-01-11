import { BoxSide, StyledButton, GoldDisplay } from "../../Styles/SideButSTyled";
import { MdBlock } from "react-icons/md";
import { useGoldStore } from "../../Store/Store";
import { useEffect, useState } from "react";
interface SideProps {
  handlerChangeStatus: () => void;
}

export default function SideButton({ handlerChangeStatus }: SideProps) {
  const [goldStatus, setGoldStatus] = useState(false);
  useEffect(() => {
    if(gold >= 20){
       setGoldStatus(true);
    }
  }, []);
  const gold = useGoldStore((state) => state.gold);

  return (
    <BoxSide statusGold={goldStatus}>
      <GoldDisplay>Gold: {gold}</GoldDisplay>
      <div>
        <StyledButton onClick={handlerChangeStatus}>Type 1</StyledButton>
      </div>
      <div>
        <StyledButton onClick={handlerChangeStatus}>Type 2</StyledButton>
      </div>
      <div>
        <StyledButton >{gold >= 20 ? "Type 3" : <MdBlock />}</StyledButton>
      </div>
      <div>
        <StyledButton>Type 4</StyledButton>
      </div>
      <div>
        <StyledButton>Type 5</StyledButton>
      </div>
      <div>
        <StyledButton>Type 6</StyledButton>
      </div>
    </BoxSide>
  );
}
