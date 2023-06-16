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
        <div id="header" class="bg-red-100 fixed w-full">
            <div class="flex justify-between">
                <h1 class="text-xl p-1">院生ゲーム</h1>
                <div class="p-1">{{ currentUser }.currentUser.name}がログイン中</div>
            </div>

            <div class="flex justify-between">
                <Link to={`/`} class="border rounded bg-gray-100 m-1 border-black p-1">ホーム</Link>
                <button type="submit" onClick={(e) => handleSignOut(e)} class="border rounded bg-gray-100 m-1 border-black p-1">
                    ログアウト
                </button>
                <button type="submit" onClick={(e) => handleDeleteAccountSubmit(e)} class="border rounded bg-gray-100 m-1 border-black p-1">
                    アカウント削除
                </button>
            </div>
        </div>

    )
}

