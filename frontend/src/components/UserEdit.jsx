import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";
import Prefectures from '../common/prefectures';
import Subjects from '../common/subjects';

export const UserEdit = ({ currentUser }) => {
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [content, setContent] = useState();
  const [tag, setTag] = useState();
  const [userData, setUserData] = useState();

  const params = useParams();
  const history = useHistory();


  //ユーザデータの変更を保存する
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

      <div>
        <h2 class="font-semibold mt-3 mb-1">サムネイル画像</h2>
        <input type="file" />
        <h2 class="font-semibold mt-3 mb-1">名前</h2>
        <input type="text" value={name} defaultValue={userData?.name} onChange={(e) => setName(e.target.value)} />
        <h2 class="font-semibold mt-3 mb-1">自己紹介</h2>
        <textarea name="" id="" cols="30" rows="10" value={content} defaultValue={userData?.content} onChange={(e) => setContent(e.target.value)} ></textarea>
        <h2 class="font-semibold mt-3 mb-1">年齢</h2>
        <input type="number" />
        <h2 class="font-semibold mt-3 mb-1">居住地</h2>
        <select>
          {Prefectures.PREF_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">専攻分野</h2>
        <select>
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">研究キーワード</h2>
        <input type="text" />
        <button>追加する</button>
        <h2 class="font-semibold mt-3 mb-1">興味ある分野</h2>
        <input type="text" />
        <h2 class="font-semibold mt-3 mb-1">趣味タグ</h2>
        <input type="text" />
      </div>

      <br />
      <br />
      <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" onClick={(e) => { handleSaveUserData(e) }}>
        保存する
      </button>

    </div >
  )
}

