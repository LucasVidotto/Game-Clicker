import { BoxUpdated, CardContainer, CardUpdated, CardFront, CardBack } from "../../Styles/UpdatedStyled";
import { useUpStore } from "../../Store/StoreUps";

export default function Updated() {
    const firstup = useUpStore((state) => state.first_ups);
  return (
    <BoxUpdated>
      {[...Array(6)].map((_, index) => (
       (index == 1 && firstup ? 
        <CardContainer key={index}>
        <CardUpdated>
          <CardFront>Up {index + 1}</CardFront>
          <CardBack>True {index + 1}</CardBack>
        </CardUpdated>
      </CardContainer>
      :
      <CardContainer key={index}>
      <CardUpdated>
        <CardFront>Up {index + 1}</CardFront>
        <CardBack>Updated {index + 1}</CardBack>
      </CardUpdated>
    </CardContainer>
       )
      ))}
    </BoxUpdated>
  );
}
