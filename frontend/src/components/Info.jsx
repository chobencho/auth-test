import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";


export const Info = ({ currentUser }) => {

  return (
    <div class="w-11/12 mx-auto py-5">
      <div class="flex justify-between">
        <h1 class="font-semibold text-xl">タイトル</h1>
        <p class="my-auto">10:24</p>
      </div>
      <p class="my-3">
        学生証を使って年齢確認を行ってください。年齢が確認でき次第チャット機能が解放されます。
      </p>

      <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
      </button>
    </div >
  )
}

