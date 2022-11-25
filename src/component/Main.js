import {useEffect, useState} from "react";

export default function Main() {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch("https://localhost:3001/members")
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setMembers(data);
            });
    }, []);

    return (
        <>
            {members.map(mem =>(
                <div key={mem.idx}>{mem.name}님 반갑습니다.</div>
            ))}
            <div>
                <button className="logout-btn">Log Out</button>
            </div>
        </>
    );
}
