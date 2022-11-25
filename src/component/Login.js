import {Link} from "react-router-dom";
import Chameleon from "../img/chameleon.png";
import {useState} from "react";
import useFetch from "../hook/useFetch";

export default function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        /*if (!id) {
            return alert("ID를 입력하세요.");
        } else if (!password) {
            return alert("Password를 입력하세요.");
        } else {
            let member = {id, password};
            fetch('http://localhost:3001/member')
            .then(res => {
                return res.json();
            });
            .then(data => {
            });
        }*/
    }
        return (
            <main>
                <div className="Login-form">
                    <h1>
                        <img className="img-Cham" src={Chameleon} alt="Chameleon"/>
                        <Link to="/" className="title">Chameleon</Link>
                    </h1>
                    <form>
                        <div className="input-id">
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID"/>
                        </div>
                        <div className="input-pw">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        </div>
                        <div>
                            <button className="login-btn" onClick={login}>Login</button>
                        </div>
                        <div>
                            <Link to="/signup" className="link">회원가입</Link>
                        </div>
                    </form>
                </div>
            </main>
        );
    }