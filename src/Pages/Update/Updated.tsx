import { BoxUpdated, CardContainer, CardUpdated, CardFront, CardBack } from "../../Styles/UpdatedStyled";
import { useUpStore } from "../../Store/StoreUps";

export default function Updated() {
    const firstup = useUpStore((state) => state.first_ups);
    const totalup = useUpStore((state) => state.total_ups);
  return (
    <BoxUpdated>
      {[...Array(6)].map((_, index) => (
        <CardContainer key={index}>
        <CardUpdated>
          <CardFront> {index + 1}</CardFront>
          <CardBack firstup={ index + 1<= totalup && firstup}>
            {index === 1 && firstup ? "True" : "Updated"} {totalup + 1} 
          </CardBack>

        </CardUpdated>
      </CardContainer>
      ))}
    </BoxUpdated>
  );
}
