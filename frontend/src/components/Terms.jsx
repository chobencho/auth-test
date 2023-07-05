import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import React from 'react'

export const Terms = ({ currentUser }) => {

  const navigate = useNavigate();

  const handleBackTerms = () => {
    navigate(`/setting`);
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">
        <h1 class="font-semibold text-xl text-center mt-5">利用規約</h1>

        <p class="my-5">
          これは利用規約です。破ったらぶっとばします。まじで。
          これは利用規約です。破ったらぶっとばします。まじで。
          これは利用規約です。破ったらぶっとばします。まじで。
          これは利用規約です。破ったらぶっとばします。まじで。
        </p>

        <button type='submit' onClick={handleBackTerms} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
        </button>
      </div >
      <Footer currentUser={currentUser} />
    </>
  )
}

