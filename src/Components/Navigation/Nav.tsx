import { Link } from "react-router-dom";
import { NavbarBox } from "../../Styles/NavStyled";

export default function Nav(){
    return(
        <NavbarBox>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="skills">Upgrades</Link>
            </div>
            <div>
                <Link to="ups">Updated</Link>
            </div>
        </NavbarBox>
    )
}