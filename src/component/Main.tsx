import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Member} from "../types/Types";


interface Props {
    loginMember: Member | null,
    setLoginMember: Dispatch<SetStateAction<Member | null>>
}

export default function Main({loginMember, setLoginMember}: Props) {
    if (loginMember) {
        return (
            <>
                <div key={loginMember.idx}>{loginMember.name}님 반갑습니다.</div>
                <div>
                    <button className="logout-btn" onClick={() => {
                        window.location.href = '/';
                    }}>Log Out
                    </button>
                </div>
            </>
        );
    } else {
        return <><p>ㄲㅈ</p></>
    }

}
