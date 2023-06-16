import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import peopleimg from '../images/people.jpg';

export const User = ({ currentUser }) => {

  const [userData, setUserData] = useState();
  const params = useParams();

  const userId = params.id;

  const editBtn = () => {
    if (userId == { currentUser }.currentUser.id) {
      return <Link to={`/users/${userId}/edit`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">編集する</Link>;
    } else {
      return <button class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">メッセージをする</button>;
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
    <div class="pb-14">
      <img src={peopleimg} alt="" />

      <div class="w-max flex m-auto ">
        <img src={peopleimg} alt="" class="w-14 h-14 object-cover rounded m-1"/>
        <img src={peopleimg} alt="" class="w-14 h-14 object-cover rounded m-1" />
      </div>
      <div class="flex justify-center">
        <h2 class="text-xl font-semibold">{userData?.name}</h2>
        <p class="text-sm m-1">24歳</p>
        <p class="text-sm m-1">東京都</p>
      </div>
      <div class="flex text-sm justify-center">
        <p>24時間以内</p>
        <span class="mx-1">/</span>
        <p>年齢確認済み</p>
      </div>
      <div class="w-11/12 mx-auto my-3">
        <h2 class="font-semibold mt-3 mb-1">自己紹介</h2>
        <p class="text-base">東京大学大学院で生物学について研究しています。広告分野にきょうみがあります。最近そろのみにはまっています。</p>
        <h2 class="font-semibold mt-3 mb-1">専攻分野</h2>
        <p class="text-base">生物学</p>
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
  )
}

