import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import peopleimg from '../images/people.jpg';
import peoplesvg from '../images/people.svg';
import idsvg from '../images/id.svg';
import infosvg from '../images/info.svg';
import settingsvg from '../images/setting.svg';
import boardsvg from '../images/board.svg';
import favsvg from '../images/fav.svg';

export const Mypage = ({ currentUser }) => {

  const params = useParams();

  const userId = { currentUser }.currentUser.id;


  return (
    <div class="">

      <h1 class="font-semibold text-xl text-center mt-5">マイページ</h1>

      <img src={peopleimg} class="w-40 h-40 object-cover rounded-full mx-auto mt-5" alt="" />
      <p class="font-semibold text-xl text-center my-2">たけし</p>
      
      <div class="flex flex-wrap w-11/12 mx-auto">
        <Link to={`/users/${userId}/edit`} class="w-1/2 p-1 mb-3">
          <img src={peoplesvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">プロフィール編集</p>
        </Link>
        <Link to={`/validateage`} class="w-1/2 p-1 mb-3">
        <img src={idsvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">年齢確認</p>
        </Link>
        <Link to={`/information`} class="w-1/2 p-1 mb-3">
        <img src={infosvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">お知らせ</p>
        </Link>
        <Link to={`/setting`} class="w-1/2 p-1 mb-3">
        <img src={settingsvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">各種設定</p>
        </Link>
        <Link to={`/myboards/${userId}`} class="w-1/2 p-1 mb-3">
        <img src={boardsvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">掲示板</p>
        </Link>
        <Link to={`/myfav`} class="w-1/2 p-1 mb-3">
        <img src={favsvg} class="w-2/5 mx-auto pt-3" alt="" />
          <p class="text-center pt-2 text-sm">いいね</p>
        </Link>
      </div>
    </div >
  )
}

