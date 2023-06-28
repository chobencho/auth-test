import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";

export const Terms = ({ currentUser }) => {

  const history = useHistory();

  const handleBackInquiry = () => {
    history.push(`/setting`);
  }

  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">利用規約</h1>

      <p>
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
      </p>

      <button type='submit' onClick={handleBackInquiry} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
      </button>
    </div >
  )
}

