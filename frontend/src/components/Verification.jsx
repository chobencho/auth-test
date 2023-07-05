import { Header } from "./Header";
import { Footer } from "./Footer";
import React from 'react'


export const Verification = ({ currentUser }) => {

  return (

    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">

        <h1 class="font-semibold text-xl text-center mt-5">年齢確認</h1>

        <p class="mt-5">
          学生証を使って年齢確認を行います。
          下記から学生証をアップロードしてください。
        </p>

        <div class="flex items-center justify-center w-full mb-3 mt-5">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">写真のアップロードはここをクリック</span></p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <button type='submit' class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2" >アップロードする</button>

      </div >
      <Footer currentUser={currentUser} />
    </>

  )
}

