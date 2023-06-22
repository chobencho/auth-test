import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";


export const Information = ({ currentUser }) => {

  return (
    <div class="w-11/12 mx-auto">

      <h1 class="font-semibold text-xl text-center mt-5">お知らせ</h1>

      <div class="mt-5">

        <Link to={'/info'} class="inline-block border bg-gray-100 p-1 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="flex">
              <span class="bg-red-600 text-white text-xs rounded-sm my-auto py-0.5 px-2 mr-2">重要</span>
              <h1 class="font-semibold text-xl">タイトル</h1>
            </div>
            <p class="my-auto px-2">10:24</p>
          </div>
          <p class="text-sm p-1">学生証を使って年齢確認を行ってください。年齢が確認でき次第チャット機能が解放されます。</p>
        </Link>
        <Link to={'/info'} class="inline-block border bg-gray-100 p-1 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="flex">
              <span class="bg-red-600 text-white text-xs rounded-sm my-auto py-0.5 px-2 mr-2">重要</span>
              <h1 class="font-semibold text-xl">タイトル</h1>
            </div>
            <p class="my-auto px-2">10:24</p>
          </div>
          <p class="text-sm p-1">学生証を使って年齢確認を行ってください。年齢が確認でき次第チャット機能が解放されます。</p>
        </Link>
        <Link to={'/info'} class="inline-block border bg-gray-100 p-1 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="flex">
              <span class="bg-red-600 text-white text-xs rounded-sm my-auto py-0.5 px-2 mr-2">重要</span>
              <h1 class="font-semibold text-xl">タイトル</h1>
            </div>
            <p class="my-auto px-2">10:24</p>
          </div>
          <p class="text-sm p-1">学生証を使って年齢確認を行ってください。年齢が確認でき次第チャット機能が解放されます。</p>
        </Link>
        <Link to={'/info'} class="inline-block border bg-gray-100 p-1 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="flex">
              <span class="bg-red-600 text-white text-xs rounded-sm my-auto py-0.5 px-2 mr-2">重要</span>
              <h1 class="font-semibold text-xl">タイトル</h1>
            </div>
            <p class="my-auto px-2">10:24</p>
          </div>
          <p class="text-sm p-1">学生証を使って年齢確認を行ってください。年齢が確認でき次第チャット機能が解放されます。</p>
        </Link>
      </div>
    </div >
  )
}

