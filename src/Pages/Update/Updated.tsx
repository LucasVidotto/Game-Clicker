import { BoxUpdated, CardContainer, CardUpdated, CardFront, CardBack } from "../../Styles/UpdatedStyled";
import { useUpStore } from "../../Store/StoreUps";
import { GoBlocked } from "react-icons/go";

export default function Updated() {
  const firstup = useUpStore((state) => state.first_ups);
  const secondups = useUpStore((state) => state.second_ups);
  const totalup = useUpStore((state) => state.total_ups);

  // Array de estados
  const ArraySetUps = [firstup, secondups];

  return (
    <BoxUpdated>
      {[...Array(6)].map((_, index) => {
        // Verifica se o estado atual e o anterior são verdadeiros
        const isBlocked =
          index > 0 && ArraySetUps[index] && ArraySetUps[index - 1];

        return (
          <CardContainer key={index}>
            <CardUpdated>
              <CardFront>
                {/* Exibe o ícone GoBlocked se a condição for verdadeira */}
                {isBlocked ?  `Card ${index + 1}` : <GoBlocked /> }
              </CardFront>
              <CardBack firstup={index + 1 <= totalup && firstup}>
                {/* Atualiza o texto com base na condição */}
                {index === 1 && firstup ? "True" : "Updated"} {totalup + 1}
              </CardBack>
            </CardUpdated>
          </CardContainer>
        );
      })}
    </BoxUpdated>
  );
}
