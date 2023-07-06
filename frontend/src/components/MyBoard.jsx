import { Header } from "./Header";
import { Footer } from "./Footer";
import moment from 'moment';
import people from '../images/people.jpg';
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";


export const MyBoard = ({ currentUser }) => {

  const [boards, setBoards] = useState();
  const params = useParams();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/myboard/${params.id}`);
      setBoards(res.data);
    };
    f();
  }, []);

  return (
    <>
    <Header currentUser={currentUser} />
    <div class="py-20">
      <h1 class="font-semibold text-xl text-center mt-5">自分の掲示板</h1>

        {boards?.map((boardData) => (
            <Link to={`/board/${boardData.id}`} key={boardData.id}>

                <div class="w-11/12 mx-auto mt-3 border rounded-lg bg-gray-500 p-3">
                    <div class="flex">
                        <img src={people} alt="" class="w-12 h-12 object-cover rounded mr-3" />
                        <div>
                            <h2 class="text-xl font-semibold">{boardData.name}</h2>
                            <p class="text-gray-100">{moment(boardData.created_at).format('YYYY/MM/DD HH:mm')}</p>
                        </div>
                    </div>
                    <div>
                        <p class="my-1 font-semibold">{boardData.title}</p>
                        <img src={people} alt="" class="my-3" />
                        <p>
                            {boardData.board_content}
                        </p>
                        <div class="my-3">
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">生物学</span>
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">獣医</span>
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">微生物</span>
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">生物学</span>
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">獣医</span>
                            <span class="bg-yellow-100 border rounded p-1 mr-1 text-sm">微生物</span>
                        </div>
                    </div>
                </div>
            </Link>
        ))}

    </div >
    <Footer currentUser={currentUser} />
    </>
  )
}

