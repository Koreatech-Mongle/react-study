import Chameleon from "../img/chameleon.png";
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <div className="Header">
            <h1>
                <img className="img-Cham" src={Chameleon} alt="Chameleon"/>
                <Link to="/" className="title">Chameleon</Link>
            </h1>
        </div>
    );
}