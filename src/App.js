import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Main from "./component/Main";
/*import Header from "./component/Header";*/

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/main" element={<Main/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
