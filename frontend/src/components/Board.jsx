import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";
import { FaHeart } from "react-icons/fa6";

import React from 'react'
import moment from 'moment';
import people from '../images/people.jpg';

export const Board = ({ currentUser }) => {

  const [boardData, setBoardData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const userId = { currentUser }.currentUser.id

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/board/${params.id}`, {params: {userId: userId}});
      setBoardData(res.data);
    };
    f();
  }, []);


  const handleCreateFavorite = (e) => {
    axiosInstance.post(`/board/${params.id}/likecreate`, {userId: userId});
    navigate(`/board/${params.id}`);
  }

  const handleDeleteFavorite = (e) => {
    axiosInstance.post(`/board/${params.id}/likedelete`, {userId: userId});
    navigate(`/board/${params.id}`);
  }


  const likeBtn = () => {
    if (boardData?.like) {
      return<button type="submit" onClick={(e) => { handleDeleteFavorite(e) }}><FaHeart class="text-xl text-red-400 my-3"/></button>;
    } else {
      return<button type="submit" onClick={(e) => { handleCreateFavorite(e) }}><FaHeart class="text-xl my-3"/></button>;
    }
  };

  const editBtn = () => {
    if (userId == { currentUser }.currentUser.id) {
      return <Link to={`/board/${params.id}/edit`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">編集する</Link>;
    } else {
      return <button class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">メッセージをする</button>;
    }
  };

  return (
    <>
      <Header currentUser={currentUser} />

      <div class="w-11/12 mx-auto py-24">
        <div class="flex justify-between">
          <div class="flex">
            <img src={people} alt="" class="w-12 h-12 object-cover rounded mr-3" />
            <h1 class="font-semibold text-xl my-auto">{boardData?.board.name}</h1>
          </div>
          <p class="my-auto">{moment(boardData?.board.created_at).format('YYYY/MM/DD HH:mm')}</p>
        </div>
        <div class="flex justify-between">
          <h1 class="text-xl font-semibold my-3">{boardData?.board.title}</h1>
          {likeBtn()}
        </div>

        <img src={people} alt="" />
        <p>
          {boardData?.board.board_body}
        </p>

        <div class="my-3">
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">生物学</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">獣医</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">微生物</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">生物学</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">獣医</span>
          <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">微生物</span>
        </div>

        <h1 class="font-semibold text-xl border-b py-2 border-gray-500">コメント</h1>

        <div>
          <div class="flex p-2">
            <img src={people} alt="" class="w-12 h-12 object-cover rounded mr-3" />
            <div>
              <div class="flex">
                <h1 class="font-semibold text-sm my-auto">たけし</h1>
                <p class="text-xs text-slate-500 my-auto mx-1">10:24</p>
              </div>
              <p class="text-xs">私は東京大学大学院で生物学の研究をしております。ぜひ仲良くしてください。しれくれないとおこです。</p>
            </div>
          </div>
          <div class="flex p-2">
            <img src={people} alt="" class="w-12 h-12 object-cover rounded mr-3" />
            <div>
              <div class="flex">
                <h1 class="font-semibold text-sm my-auto">たけし</h1>
                <p class="text-xs text-slate-500 my-auto mx-1">10:24</p>
              </div>
              <p class="text-xs">私は東京大学大学院で生物学の研究をしております。ぜひ仲良くしてください。しれくれないとおこです。</p>
            </div>
          </div>
        </div>
        {editBtn()}
      </div>
      <Footer currentUser={currentUser} />
    </>
  )
}

