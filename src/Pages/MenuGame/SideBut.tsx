import { BoxSide } from "../../Styles/SideButSTyled"

interface SideProps {
    handlerChangeStatus : () => void;
}
//botões lateias do menus
export default function SideButton({handlerChangeStatus}: SideProps){
    return(
        <BoxSide>
            <div>
                <button onClick={handlerChangeStatus}>Type 1</button>
            </div>
            <div>
                <button onClick={handlerChangeStatus}>Type 2</button>
            </div>
            <div>
                <button>Type 3</button>
            </div>
            <div>
                <button>Type 4</button>
            </div>
            <div>
                <button>Type 5</button>
            </div>
            <div>
                <button>Type 6</button>
            </div>

        </BoxSide>
    )
}