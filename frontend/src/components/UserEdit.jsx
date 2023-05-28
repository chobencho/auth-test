import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";


export const UserEdit = ({ currentUser }) => {
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [content, setContent] = useState();
  const [userData, setUserData] = useState();

  const params = useParams();
  const history = useHistory();


  const handleSaveUserData = async (e) => {
    axiosInstance.post(`/users/${params.id}/update`, { name, hobby, content });
    history.push(`/users/${params.id}`);
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
      <table>
        <tr>
          <th>名前</th>
          <td><input type="text" value={name} defaultValue={userData?.name} onChange={(e) => setName(e.target.value)} /></td>

        </tr>
        <tr>
          <th>趣味</th>
          <td><input type="text" value={hobby} defaultValue="nakatani" onChange={(e) => setHobby(e.target.value)} /></td>
        </tr>
        <tr>
          <th>自己紹介</th>
          <td><textarea name="" id="" cols="30" rows="10" value={content} defaultValue={userData?.content} onChange={(e) => setContent(e.target.value)} ></textarea></td>
        </tr>
      </table>
      <br />
      <br />
      <button type='submit' onClick={(e) => { handleSaveUserData(e) }}>
        保存する
      </button>
    </div >
  )
}

