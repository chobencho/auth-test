import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { axiosInstance } from "../utils/axios.js";

export const DeleteAccount = ({ currentUser }) => {

  const navigate = useNavigate();

  const handleBackDeleteAccount = () => {
    navigate(`/setting`);
  }

  const userId = { currentUser }.currentUser.id;

  const handleDeleteAccountSubmit = async (e) => {
    if (window.confirm("アカウントを削除すると元の状態に戻せませんがよろしいですか？")) {
      axiosInstance.delete(`/users/${userId}/destroy`);
      navigate("/signin");
    }
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">

        <h1 class="font-semibold text-xl text-center mt-5">アカウント削除</h1>

        <p class="my-5">
          アカウントを削除するとデータを元に戻すことはできません。
          これまでのデータはすべて削除されます。
        </p>

        <button type='submit' onClick={handleBackDeleteAccount} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
        </button>

        <button type="submit" onClick={(e) => handleDeleteAccountSubmit(e)} class="border border-gray-200 bg-red-600 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">
          アカウント削除
        </button>

      </div >
      <Footer currentUser={currentUser} />
    </>
  )
}

