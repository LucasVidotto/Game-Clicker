import { useState } from "react";
import { BoxMain, Cards, BoxLife, BarLife } from "../../Styles/MainStyled";
//Função para clicar e habilitar comprar
export default function GoldSys() {
    const [point, setPoint] = useState(0); // Inicia vazio

    const hashPoint = () => {
        if (point < 100) {
            setPoint(point + 1); // Aumenta 1% a cada clique
        }
    };

    return (
        <>
            <BoxMain>
                <Cards>
                    <div>
                        <BoxLife>
                            <BarLife width={point} />
                        </BoxLife>
                        <h1>Points: {point}%</h1>
                    </div>
                    <div>
                        <button onClick={hashPoint}>Click Here</button>
                    </div>
                </Cards>
            </BoxMain>
        </>
    );
}
