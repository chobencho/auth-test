import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import React from 'react'

export const Inquiry = ({ currentUser }) => {

  const navigate = useNavigate();

  const handleBackInquiry = () => {
    navigate(`/setting`);
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">
        <h1 class="font-semibold text-xl text-center mt-5">お問い合わせ</h1>

        <div class="my-5">
          <p>
            下記のアドレスにお問い合わせください。
          </p>
          <p>~~@gmail.com</p>
        </div>


        <button type='submit' onClick={handleBackInquiry} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
        </button>
      </div >
      <Footer currentUser={currentUser} />
    </>
  )
}

