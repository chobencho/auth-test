import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { axiosInstance } from "../utils/axios.js";

import React from 'react';
import people from '../images/people.jpg';
import moment from 'moment';

export const Boards = ({ currentUser }) => {

    const [boards, setBoards] = useState();

    useEffect(() => {
        const f = async () => {
            const res = await axiosInstance.get(`/boards`);
            setBoards(res.data);
        };
        f();
    }, []);


    return (
        <>


            <Header currentUser={currentUser} />

            <div class="py-20">

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
                                    {boardData.body}
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

                <Link to={`/`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">新規作成</Link>

            </div>

            <Footer currentUser={currentUser} />
        </>

    )
}

