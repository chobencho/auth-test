import React from 'react';
import moment from 'moment';
import search from '../images/search.svg';
import peopleimg from '../images/people.jpg';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";


export const Boards = ({ currentUser }) => {

    const [searchKeyword, setSearchKeyword] = useState();
    const [boards, setBoards] = useState();
    const params = useParams();

    const history = useHistory();

    const handleSearchKeywordOnBoard = async (e) => {
        history.push(`/boards/search/${searchKeyword}`);
    }

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/boards`);
          setBoards(res.data);
        };
        f();
    }, []);


    return (
        <div class="pb-14">
            <div class="flex justify-between py-4 px-2">
                <h1 class="text-xl font-semibold">掲示板</h1>
                <button class="flex justify-between border bg-gray-100 rounded w-3/4">
                    <span class="my-auto mx-2 text-gray-600">条件で絞り込む</span>
                    <img src={search} alt="logo" class="w-4 my-auto mx-1"/>
                </button>
            </div>

            {/* 
            <p>検索キーワード</p>
            <input type="text" value={searchKeyword} defaultValue="" onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type='submit' onClick={(e) => { handleSearchKeywordOnBoard(e) }}>検索</button> 
            */}

            {boards?.map((boardData) => (
                <Link to={`/board/${boardData.id}`} key={boardData.id}>

                    <div class="w-11/12 mx-auto mt-3 border rounded-lg bg-gray-500 p-3">
                        <div class="flex">
                            <img src={peopleimg} alt="" class="w-12 h-12 object-cover rounded mr-3" />
                            <div>
                                <h2 class="text-xl font-semibold">{boardData.name}</h2>
                                <p class="text-gray-100">{moment(boardData.created_at).format('YYYY/MM/DD HH:mm')}</p>
                            </div>
                        </div>
                        <div>
                            <p class="my-1 font-semibold">{boardData.title}</p>
                            <img src={peopleimg} alt="" class="my-3" />
                            <p>
                                {boardData.content}
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

            <Link to={`/boardCreate`} class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2">新規作成</Link>

        </div>
    )
}

