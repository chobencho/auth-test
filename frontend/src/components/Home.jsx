import React from 'react'
import { signOut } from "../api/auth";
import { useHistory } from "react-router-dom";

export const Home = () => {

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
            <p>Home</p>
            <div>

            </div>
            <button type="submit" onClick={(e) => handleSignOut(e)}>
                SignOut
            </button>
        </div>
    )
}

