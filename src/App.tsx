import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Main from "./component/Main";
import {useState} from "react";
import {Member} from "./types/Types";

/*import Header from "./component/Header";*/

function App() {
    let [loginMember, setLoginMember] = useState<Member | null>(null);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login loginMember={loginMember} setLoginMember={setLoginMember}/>}/>
                    <Route path="/signup"
                           element={<SignUp/>}/>
                    <Route path="/main" element={<Main loginMember={loginMember} setLoginMember={setLoginMember}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
