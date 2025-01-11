import { useState } from "react";
import { BoxMain, Cards, BoxLife, BarLife, StyledButton, StyledTitle } from "../Styles/MainStyled";

export default function Main() {
    const [point, setPoint] = useState(0); // Estado para pontos

    const hashPoint = () => {
        if (point < 100) {
            setPoint(point + 1); // Aumenta 1% a cada clique
        }
    };

    return (
        <BoxMain>
            <Cards>
                {point == 100 ? 
                    <StyledTitle isActive={point >= 100}>Complete</StyledTitle> :
                    <StyledTitle isActive={point >= 100}>Bar Life System</StyledTitle>}
                <div>
                    <BoxLife>
                        <BarLife width={point} />
                    </BoxLife>
                    <h1>Points: {point}%</h1>
                </div>
                <div>
                    <StyledButton onClick={hashPoint}>Click Here</StyledButton>
                </div>
            </Cards>
        </BoxMain>
    );
}
