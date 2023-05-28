import { Link, useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import { signOut } from "../api/auth";
import axios from 'axios';

export const User = ({ currentUser }) => {

  const history = useHistory();

  const [userData, setUserData] = useState();
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

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/users/${params.id}`);
      setUserData(res.data);
    };
    f();
  }, []);

  const userId = params.id;

  return (
    <div>
      {/* <p>ログインユーザー : {userData?.email}</p> */}
      <p>ログインユーザー : {{ currentUser }.currentUser.email}</p>
      <Link to={`/`}>トップページ</Link>
      <button type="submit" onClick={(e) => handleSignOut(e)}>
        サインアウト
      </button>
      <button type="submit" onClick={(e) => handleDeleteAccountSubmit(e)}>
        アカウント削除
      </button>
      <br />
      <br />
      <table>
        <tr>
          <th>名前</th>
          <td>{userData?.name}</td>
        </tr>
        {/* <tr>
          <th>年齢</th>
          <td>{userData?.age}</td>
        </tr> */}
        <tr>
          <th>趣味</th>
          <td>{userData?.hobby}</td>
        </tr>
        <tr>
          <th>自己紹介</th>
          <td>{userData?.content}</td>
        </tr>
        <tr>
          <th>研究タグ</th>
          <td>tags</td>
        </tr>
      </table>

      {
        userId == { currentUser }.currentUser.id && <Link to={`/users/${userId}/edit`}>編集する</Link>
      }
    </div >
  )
}

