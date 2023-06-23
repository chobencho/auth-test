import React from 'react'
import moment from 'moment';
import peopleimg from '../images/people.jpg';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const Board = ({ currentUser }) => {

    const [board, setBoard] = useState();
    const params = useParams();



    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/board/${params.id}`);
          setBoard(res.data);
        };
        f();
    }, []);

    const userId = board?.user_id;

    const editBtn = () => {
        if (userId == { currentUser }.currentUser.id) {
          return <Link to={`/board/${params.id}/edit`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">編集する</Link>;
        } else {
          return <button class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">メッセージをする</button>;
        }
    };

    return (
        <div class="w-11/12 mx-auto my-3">
          <div class="flex justify-between">
            <div class="flex">
              <img src={peopleimg} alt="" class="w-12 h-12 object-cover rounded mr-3" />
              <h1 class="font-semibold text-xl my-auto">{board?.name}</h1>
            </div>
            <p class="my-auto">{moment(board?.created_at).format('YYYY/MM/DD HH:mm')}</p>
          </div>

          <h1 class="text-xl font-semibold my-3">{board?.title}</h1>
          <img src={peopleimg} alt="" />
          <p>
            {board?.board_content}
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
              <img src={peopleimg} alt="" class="w-12 h-12 object-cover rounded mr-3" />
              <div>
                <div class="flex">
                  <h1 class="font-semibold text-sm my-auto">たけし</h1>
                  <p class="text-xs text-slate-500 my-auto mx-1">10:24</p>
                </div>
                <p class="text-xs">私は東京大学大学院で生物学の研究をしております。ぜひ仲良くしてください。しれくれないとおこです。</p>
              </div>
            </div>
            <div class="flex p-2">
              <img src={peopleimg} alt="" class="w-12 h-12 object-cover rounded mr-3" />
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
    )
}

