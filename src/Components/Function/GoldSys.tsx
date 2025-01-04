import { useState } from "react";
import { BoxMain, Cards, BoxLife, BarLife,StyledTitle } from "../../Styles/GoldSystemStyled";
//Função para clicar e habilitar comprar
export default function GoldSys() {
    const [point, setPoint] = useState(0); // Inicia vazio
    const [statusPoint, setStatusPoint] = useState(false)
    const hashPoint = () => {
        if (point < 100) {
            setPoint(point + 1); // Aumenta 1% a cada clique
        }
        if (point >= 20){
            setStatusPoint(true)
        }
    };

    return (
        <>
            <BoxMain>
                <Cards>
                    <div>
                      {/*   {statusPoint ?<StyledTitle isActive={statusPoint}>Gold System</StyledTitle> : <h2>Gold System</h2> } */}
                      <StyledTitle isActive={statusPoint}>Gold System</StyledTitle>
                    </div>
                    <div>
                        <BoxLife>
                            <BarLife width={point} />
                        </BoxLife>
                        <h1>Points: {point}%</h1>
                        <h3>status : {statusPoint.toString()}</h3>
                    </div>
                    <div>
                        <button onClick={hashPoint}>Click Here</button>
                    </div>
                </Cards>
            </BoxMain>
        </>
    );
}
