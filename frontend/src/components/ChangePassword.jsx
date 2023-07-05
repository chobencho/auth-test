import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import React from 'react'

export const ChangePassword = ({ currentUser }) => {

  const navigate = useNavigate();

  const handleBackChangePassword = () => {
    navigate(`/setting`);
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">
        <h1 class="font-semibold text-xl text-center mt-5">パスワード変更</h1>

        <div class="my-4">
          <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8 p-1" defaultValue="" placeholder="パスワード" />
          <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8 p-1" defaultValue="" placeholder="確認用パスワード" />
        </div>

        <button type='submit' onClick={handleBackChangePassword} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
        </button>

        <button type="submit" class="border border-gray-200 bg-red-600 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">
          パスワードを変更する
        </button>

      </div >
      <Footer currentUser={currentUser} />
    </>
  )
}

