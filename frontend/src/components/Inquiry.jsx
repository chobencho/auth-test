import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";

export const Inquiry = ({ currentUser }) => {

  const history = useHistory();

  const handleBackInquiry = () => {
    history.push(`/setting`);
  }

  return (
    <div class="w-11/12 mx-auto">
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
  )
}

