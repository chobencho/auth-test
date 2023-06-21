import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from '../utils/axios';

export const BoardCreate = ({ currentUser }) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const params = useParams();
    const history = useHistory();

    const user_id =  {currentUser}.currentUser.id;

    
    const handleCreateBoard = async (e) => {
        axiosInstance.post(`/board/create`, {user_id, title, content});
        history.push(`/boards`)
    }

    return (
        <div class="w-11/12 mx-auto my-3">
            <p>タイトル</p>
            <input type="text" class="border border-gray-200 rounded w-full mb-3" value={title} defaultValue="" onChange={(e) => setTitle(e.target.value)} /> 
            <p>内容</p>
            <textarea name="" id="" cols="30" rows="5" class="border border-gray-200 rounded w-full" value={content} defaultValue="" onChange={(e) => setContent(e.target.value)} ></textarea>

            <button type='submit' class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2" onClick={(e) => { handleCreateBoard(e) }}>掲示板を作成する</button>

        </div>
    )
}

