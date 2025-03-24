import { useEffect } from "react";
import AOS from "aos";
import Main from "../Main";
import "aos/dist/aos.css"; // Importa os estilos padrão do AOS
import { CardBoxOne,CardBoxTwo } from "../../Styles/CardsStyle";
import GoldSys from "../../Components/Function/GoldSys";
type PropsStatus ={
    status: boolean;
}
//card para Menu de opção (Onde troca qual card está no centro)
export default function Cards({status}: PropsStatus){

    useEffect(() =>{
        AOS.init({
            duration: 1500,
            once:true,//Se a an imação deve acontecer apenas uma vez
        })
    })
    return(
        <>
          {status ?
            <CardBoxOne data-aos="zoom-in"> 
                <Main/> 
            </CardBoxOne> :
            <CardBoxTwo data-aos="zoom-in">
                <GoldSys />
            </CardBoxTwo>}  
        </>
    )
}