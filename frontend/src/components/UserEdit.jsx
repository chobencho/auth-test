import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";
import Prefectures from '../common/prefectures';
import Subjects from '../common/subjects';

export const UserEdit = ({ currentUser }) => {
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [content, setContent] = useState();
  const [tag, setTag] = useState();
  const [userData, setUserData] = useState();

  const params = useParams();
  const history = useHistory();


  //ユーザデータの変更を保存する
  const handleSaveUserData = async (e) => {
    axiosInstance.post(`/users/${params.id}/update`, { name, hobby, content });
    history.push(`/users/${params.id}`);
  }

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/users/${params.id}`);
      setUserData(res.data);
    };
    f();
  }, []);


  return (
    <div class="w-11/12 mx-auto">

      <div>
        <h2 class="font-semibold mt-3 mb-1">プロフィール画像</h2>
        <div class="flex items-center justify-center w-full mb-3">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">写真のアップロードはここをクリック</span></p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 
        <h2 class="font-semibold mt-3 mb-1">名前</h2>
        <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" value={name} defaultValue={userData?.name} onChange={(e) => setName(e.target.value)} />
        <h2 class="font-semibold mt-3 mb-1">自己紹介</h2>
        <textarea name="" id="" cols="30" rows="5" class="border border-gray-200 rounded w-full mb-3" value={content} defaultValue={userData?.content} onChange={(e) => setContent(e.target.value)} ></textarea>
        <h2 class="font-semibold mt-3 mb-1">年齢</h2>
        <input type="number" class="border border-gray-200 rounded w-full mb-3 h-8" />
        <h2 class="font-semibold mt-3 mb-1">性別</h2>
        <input type="number" class="border border-gray-200 rounded w-full mb-3 h-8" />
        <h2 class="font-semibold mt-3 mb-1">居住地</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Prefectures.PREF_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">学年</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">専攻分野</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">研究タグ</h2>
        <input type="text" class="border border-gray-200 rounded w-3/4 h-8" />
        <button class="border border-gray-500 bg-gray-600 text-white w-1/5 text-sm h-8 mx-2">追加する</button>
        <h2 class="font-semibold mt-3 mb-1">興味ある分野</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">趣味</h2>
        <input type="text"  class="border border-gray-200 rounded w-full mb-3 h-8" />
      </div>

      <br />
      <br />
      <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" onClick={(e) => { handleSaveUserData(e) }}>
        保存する
      </button>

    </div >
  )
}

