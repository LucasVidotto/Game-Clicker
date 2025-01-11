import { useState } from "react";
import { BAckMenu,BoxGame,CardCenter } from "../../Styles/MenuStyled";
import Cards from "./Cards";
import SideButton from "./SideBut";
import Nav from "../../Components/Navigation/Nav";
//Menu de Opções para cada Card (seleção de todos os cards e botões)
export default function Menu(){
    const [status, SetStatus] = useState(false);

    const handlerChangeStatus = () =>{
        SetStatus(!status);
    }

    return(
        <BAckMenu>
            <Nav />
            <BoxGame>
                <SideButton handlerChangeStatus={handlerChangeStatus}/>
                <CardCenter>
                    {/* {status ? <p> Card Is Active : <p> Not Active</p>} */}
                    <Cards status={status}></Cards>
                </CardCenter>
            </BoxGame>
        </BAckMenu>
    )
}