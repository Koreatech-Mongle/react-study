import {Link, Navigate} from "react-router-dom";
import Chameleon from "../img/chameleon.png";
import {Dispatch, SetStateAction, useState} from "react";
import {Member} from "../types/Types";

interface Props {
    loginMember: Member | null,
    setLoginMember: Dispatch<SetStateAction<Member | null>>
}

export default function Login({loginMember, setLoginMember}: Props) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState<boolean>(false);

    const login = async (e: any) => {
        e.preventDefault();
        if (!id && !password) {
            return alert("ID와 Password를 입력하세요.");
        } else if (!id) {
            return alert("ID를 입력하세요.");
        } else if (!password) {
            return alert("Password를 입력하세요.");
        } else {
            let member = {id, password};
            let members: Member[] = await fetch('/member').then(r => r.json());
            let serverMember = members.find(m => m.id === id) as Member;
            if (member.id === serverMember?.id && member.password === String(serverMember?.pw)) {
                setLoginMember(serverMember);
                setLoginStatus(true);
            } else {
                return alert("회원 정보가 불일치합니다.");
            }
        }
    }
    if (loginStatus) {
        return <Navigate to="/main" replace/>;
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
