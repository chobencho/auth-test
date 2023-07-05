import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import React from 'react'
import arrowsvg from '../images/arrow.svg';

export const Setting = ({ currentUser }) => {



  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">
        <h1 class="font-semibold text-xl text-center mt-5">各種設定</h1>

        <Link to={'/inquiry'} class="border-b border-gray-600 flex justify-between py-4 px-3">
          <p>お問い合わせ</p>
          <img src={arrowsvg} class="w-4" alt="" />
        </Link>
        <Link to={'/changepassword'} class="border-b border-gray-600 flex justify-between py-4 px-3">
          <p>パスワード変更</p>
          <img src={arrowsvg} class="w-4" alt="" />
        </Link>
        <Link to={'/terms'} class="border-b border-gray-600 flex justify-between py-4 px-3">
          <p>利用規約</p>
          <img src={arrowsvg} class="w-4" alt="" />
        </Link>
        <Link to={'/privacypolicy'} class="border-b border-gray-600 flex justify-between py-4 px-3">
          <p>プライバシーポリシー</p>
          <img src={arrowsvg} class="w-4" alt="" />
        </Link>
        <Link to={'/deleteaccount'} class="border-b border-gray-600 flex justify-between py-4 px-3">
          <p>アカウント削除</p>
          <img src={arrowsvg} class="w-4" alt="" />
        </Link>

      </div >
      <Footer currentUser={currentUser} />
    </>

  )
}

