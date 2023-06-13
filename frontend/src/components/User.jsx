import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import { signOut } from "../api/auth";
import { Header } from './Header';
import { Footer } from './Footer';

export const User = ({ currentUser }) => {

  const [userData, setUserData] = useState();
  const params = useParams();

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
      <Header currentUser={currentUser} />
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
      {userId == { currentUser }.currentUser.id && <Link to={`/users/${userId}/edit`}>編集する</Link>}

      <br />
      <br />
      <Footer currentUser={currentUser} />
    </div >
  )
}

