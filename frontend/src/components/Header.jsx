import React from 'react'
import { signOut } from "../api/auth";
import { Link, useHistory, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const Header = ({ currentUser }) => {

    const history = useHistory();
    const params = useParams();

    const handleSignOut = async (e) => {
        signOut();
        history.push("/signin");
    }

    const handleDeleteAccountSubmit = async (e) => {
        if (window.confirm("アカウントを削除すると元の状態に戻せませんがよろしいですか？")) {
          axiosInstance.delete(`/users/${params.id}/destroy`);
          history.push("/signin");
        }
    }

    const onClick = (e) => {
        console.log(e.target.value);
        console.log(e.target.value);
    }
    
    return (
        <div>
            <div>
                ログインユーザー : {{ currentUser }.currentUser.email}
            </div>
            <Link to={`/users/${{ currentUser }.currentUser.id}`}>マイページへ</Link>
            <button type="submit" onClick={(e) => handleSignOut(e)}>
                サインアウト
            </button>
            <button type="submit" onClick={(e) => handleDeleteAccountSubmit(e)}>
                アカウント削除
            </button>
        </div>
    )
}

