import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import arrowsvg from '../images/arrow.svg';

export const Setting = ({ currentUser }) => {



  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">各種設定</h1>

      <Link to={'/inquiry'} class="border-b border-gray-600 flex justify-between py-4 px-3">
        <p>お問い合わせ</p>
        <img src={arrowsvg} class="w-4" alt="" />
      </Link>
      <Link to={'/changePassword'} class="border-b border-gray-600 flex justify-between py-4 px-3">
        <p>パスワード変更</p>
        <img src={arrowsvg} class="w-4" alt="" />
      </Link>
      <Link to={'/terms'} class="border-b border-gray-600 flex justify-between py-4 px-3">
        <p>利用規約</p>
        <img src={arrowsvg} class="w-4" alt="" />
      </Link>
      <Link to={'/privacyPolicy'} class="border-b border-gray-600 flex justify-between py-4 px-3">
        <p>プライバシーポリシー</p>
        <img src={arrowsvg} class="w-4" alt="" />
      </Link>
      <Link to={'/deleteAccount'} class="border-b border-gray-600 flex justify-between py-4 px-3">
        <p>アカウント削除</p>
        <img src={arrowsvg} class="w-4" alt="" />
      </Link>

    </div >
  )
}

