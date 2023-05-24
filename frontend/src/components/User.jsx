import { Link, useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import { signOut } from "../api/auth";
import axios from 'axios';

export const User = ({currentUser}) => {

    const history = useHistory();

    const [userData, setUserData] = useState();
    const params = useParams();

    const handleDeleteAccountSubmit = async (e) => {
      if(window.confirm("アカウントを削除すると元の状態に戻せませんがよろしいですか？")) {
        axiosInstance.delete(`/users/${params.id}/destroy`);
        history.push("/signin");
      } 
    }

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/users/${params.id}`);
          setUserData(res.data);
        };
        f();
    }, []);



  return (
    <div>
        <p>ログインユーザー : {userData?.email}</p>
        <Link to={`/`}>トップページ</Link>
        <button type="submit" onClick={(e) => handleDeleteAccountSubmit(e)}>
          アカウント削除
        </button>
    </div>
  )
}

