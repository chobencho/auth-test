import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import people from '../images/people.jpg';

export const User = ({ currentUser }) => {

  const [userData, setUserData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const userId = params.id;

  const handleMessage = (e) => {
    axiosInstance.post(`/message/${params.id}/new`, {});
    navigate(`/message/${params.id}`);
  }

  const editBtn = () => {
    if (userId == { currentUser }.currentUser.id) {
      return <Link to={`/users/${userId}/edit`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">編集する</Link>;
    } else {
      return <button onClick={(e) => { handleMessage(e) }} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">メッセージをする</button>;
    }
  };

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/users/${params.id}`);
      setUserData(res.data);
    };
    f();
  }, []);



  return (
    <>
      <Header currentUser={currentUser} />
      <div class="py-20">
        <img src={`${process.env.PUBLIC_URL}/images/profile/${userData?.image}`} alt="" />

        <div class="w-max flex m-auto ">
          <img src={people} alt="" class="w-14 h-14 object-cover rounded m-1" />
          <img src={people} alt="" class="w-14 h-14 object-cover rounded m-1" />
        </div>
        <div class="flex justify-center">
          <h2 class="text-xl font-semibold">{userData?.name}</h2>
          <p class="text-sm m-1">{userData?.age}歳</p>
          <p class="text-sm m-1">{userData?.prefecture_code}</p>
        </div>
        <div class="flex text-sm justify-center">
          <p>24時間以内</p>
          <span class="mx-1">/</span>
          <p>年齢確認済み</p>
        </div>
        <div class="w-11/12 mx-auto my-3">
          <h2 class="font-semibold mt-3 mb-1">自己紹介</h2>
          <p class="text-base whitespace-pre-wrap">{userData?.body}</p>
          <h2 class="font-semibold mt-3 mb-1">性別</h2>
          <p class="text-base">{userData?.gender_code}</p>
          <h2 class="font-semibold mt-3 mb-1">学年</h2>
          <p class="text-base">{userData?.grade_code}</p>
          <h2 class="font-semibold mt-3 mb-1">専攻分野</h2>
          <p class="text-base">{userData?.subject_code}</p>
          <h2 class="font-semibold mt-3 mb-1">研究キーワード</h2>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">生物学</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">獣医</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">微生物</span>
          <h2 class="font-semibold mt-3 mb-1">興味分野</h2>
          <span class="bg-green-100 border rounded p-1 mr-1 text-sm">広告</span>
          <span class="bg-green-100 border rounded p-1 mr-1 text-sm">航空宇宙</span>
          <span class="bg-green-100 border rounded p-1 mr-1 text-sm">教育</span>
          <h2 class="font-semibold mt-3 mb-1">趣味</h2>
          <span class="bg-red-100 border rounded p-1 mr-1 text-sm">釣り</span>
          <span class="bg-red-100 border rounded p-1 mr-1 text-sm">ハッカソン</span>
        </div>

        {/* 関数で条件分岐したボタンを呼び出す */}
        {editBtn()}

      </div >
      <Footer currentUser={currentUser} />
    </>
  )
}

