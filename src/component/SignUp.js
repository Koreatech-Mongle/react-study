import {Link} from "react-router-dom";
import Chameleon from "../img/chameleon.png";

export default function SignUp() {
    return (
        <main>
            <div className="SignUp-form">
                <h1>
                    <img className="img-Cham" src={Chameleon} alt="Chameleon"/>
                    <Link to="/" className="title">Sign Up</Link>
                </h1>
                <form>
                    <div className="input-id">
                        <input type="text" placeholder="ID"/>
                    </div>
                    <div className="input-pw">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-name">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <button className="SignUp-btn">Sign Up</button>
                    </div>
                    <div>
                        <Link to="/" className="link">로그인</Link>
                    </div>
                </form>
            </div>
        </main>
    );
}