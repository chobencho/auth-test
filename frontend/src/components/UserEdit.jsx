import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";
import Prefectures from '../common/prefectures';
import Subjects from '../common/subjects';
import Gender from '../common/gender';
import Grade from '../common/grade';
import Interests from '../common/interest';
import sampleimg1 from '../images/jog1.jpg';

export const UserEdit = ({ currentUser }) => {
  const [name, setName] = useState();
  const [content, setContent] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [prefecture, setPrefecture] = useState();
  const [grade, setGrade] = useState();
  const [subject, setSubject] = useState();
  const [tag, setTag] = useState();
  const [userData, setUserData] = useState();

  const params = useParams();
  const history = useHistory();



  //ユーザデータの変更を保存する
  const handleSaveUserData = async (e) => {
    axiosInstance.post(`/users/${params.id}/update`, { name, content, age, gender, prefecture, grade, subject });
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

      <div class="w-full">
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
        <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" value={name} key={userData?.name} defaultValue={userData?.name} onChange={(e) => setName(e.target.value)} />
        <h2 class="font-semibold mt-3 mb-1">自己紹介</h2>
        <textarea name="" id="" cols="30" rows="5" class="border border-gray-200 rounded w-full mb-3" value={content} key={userData?.content} defaultValue={userData?.content} onChange={(e) => setContent(e.target.value)} ></textarea>
        <h2 class="font-semibold mt-3 mb-1">年齢</h2>
        <input type="number" class="border border-gray-200 rounded w-full mb-3 h-8" value={age} key={userData?.age} defaultValue={userData?.age} onChange={(e) => setAge(e.target.value)}/>
        <h2 class="font-semibold mt-3 mb-1">性別</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8" value={gender} key={userData?.gender_code} defaultValue={userData?.gender_code} onChange={(e) => setGender(e.target.value)}>
          {Gender.GEN_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">居住地</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8" value={prefecture} key={userData?.code} defaultValue={userData?.code} onChange={(e) => setPrefecture(e.target.value)}>
          {Prefectures.PREF_OPTIONS.map(option => {
            return (<option value={option} >{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">学年</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8" value={grade} key={userData?.grade_code} defaultValue={userData?.grade_code} onChange={(e) => setGrade(e.target.value)}>
          {Grade.GRD_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">専攻分野</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8" value={subject} key={userData?.subject_code} defaultValue={userData?.subject_code} onChange={(e) => setSubject(e.target.value)}>
          {Subjects.SUB_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">研究タグ</h2>
        <input type="text" class="border border-gray-200 rounded w-3/4 h-8" />
        <button class="border border-gray-500 bg-gray-600 text-white w-1/5 text-sm h-8 mx-2">追加する</button>
        <h2 class="font-semibold mt-3 mb-1">興味ある分野</h2>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Interests.INT_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Interests.INT_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <select class="border border-gray-200 rounded w-full mb-3 h-8">
          {Interests.INT_OPTIONS.map(option => {
            return (<option value={option}>{option}</option>)
          })}
        </select>
        <h2 class="font-semibold mt-3 mb-1">趣味</h2>

        <div class="overflow-auto h-96">

          <p class="text-sm text-center my-2"> - 文化系 - </p>
          <div class="flex flex-wrap">
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_movie.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">映画</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_karaoke.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">カラオケ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_camera.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">写真</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_theater.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">劇場</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_art.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">芸術</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_music.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">音楽</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_creator.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">クリエイティブ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_gaming.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ゲーム</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_anime.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">アニメ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_book.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">小説</p>
            </div>
          </div>

          <p class="text-sm text-center my-2"> - アクティブ - </p>
          <div class="flex flex-wrap">
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_travel.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">旅行</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_exercise.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">運動</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_jogging.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ジョギング</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_car.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">車</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_bicycle.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">自転車</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_dance.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ダンス</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_golf.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ゴルフ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_dart.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ダーツ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_boxing.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">格闘技</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_fitness.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">トレーニング</p>
            </div>
          </div>

          <p class="text-sm text-center my-2"> - 性格 - </p>
          <div class="flex flex-wrap">
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_wedding.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">結婚</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_sweet.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">スイーツ</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_cook.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">料理</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_indoor.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">インドア</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_norway.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">動物</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_owarai.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">お笑い</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_zakka.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">雑貨</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_mountain.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">ハイキング</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_onsen.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">温泉</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_ferris-wheel.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">遊園地</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_alchool.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">アルコール</p>
            </div>
            <div class="w-1/3 p-1">
              <img src={`${process.env.PUBLIC_URL}/images/interest/hobby_talk.jpg`} class="rounded" alt="" />
              <p class="text-sm text-center">お喋り</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" onClick={(e) => { handleSaveUserData(e) }}>
        保存する
      </button>

    </div >
  )
}

