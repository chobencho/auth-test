import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const BoardEdit = ({ currentUser }) => {

    const [title, setTitle] = useState();
    const [boardContent, setBoardContent] = useState();
    
    const params = useParams();
    const history = useHistory();

    const handleSaveBoardData = async (e) => {
        axiosInstance.post(`/board/${params.id}/update`, { title, boardContent });
        history.push(`/board/${params.id}`);
    }


    return (
        <div class="w-11/12 mx-auto my-3">
            <p>タイトル</p>
            <input type="text" class="border border-gray-200 rounded w-full mb-3" value={title} defaultValue="" onChange={(e) => setTitle(e.target.value)} />
            <p>内容</p>
            <textarea name="" id="" cols="30" rows="5" class="border border-gray-200 rounded w-full" value={boardContent} defaultValue="" onChange={(e) => setBoardContent(e.target.value)} ></textarea>

            <button type='submit' class="border border-gray-200 bg-green-500 text-white text-center text-xs py-2 fixed bottom-20 inset-x-1/4 w-1/2" onClick={(e) => { handleSaveBoardData(e) }}>
                保存する
            </button>

        </div>
    )
}

