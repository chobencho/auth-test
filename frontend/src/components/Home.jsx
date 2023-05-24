import React from 'react'
import { signOut } from "../api/auth";
import { Link, useHistory } from "react-router-dom";

export const Home = ({currentUser}) => {

    const history = useHistory();

    const handleSignOut = async (e) => {
        signOut();
        history.push("/signin");
    }

    const onClick = (e) => {
        console.log(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <div>
                ログインユーザー : {{currentUser}.currentUser.email}
            </div>
            <Link to={`/users/${{currentUser}.currentUser.id}`}>マイページへ</Link>
            <button type="submit" onClick={(e) => handleSignOut(e)}>
                サインアウト
            </button>
        </div>
    )
}

