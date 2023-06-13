import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const BoardEdit = ({ currentUser }) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    
    const params = useParams();
    const history = useHistory();

    const handleSaveBoardData = async (e) => {
        axiosInstance.post(`/board/${params.id}/update`, { title, content });
        history.push(`/board/${params.id}`);
    }


    return (
        <div>
            <Header currentUser={currentUser} />

            <br />
            <br />

            <p>タイトル</p>

            <input type="text" value={title} defaultValue="" onChange={(e) => setTitle(e.target.value)} />

            <p>内容</p>

            <textarea name="" id="" cols="30" rows="10" value={content} defaultValue="" onChange={(e) => setContent(e.target.value)} ></textarea>

            <br />
            <br />

            <button type='submit' onClick={(e) => { handleSaveBoardData(e) }}>
                保存する
            </button>

            <br />
            <br />

            <Footer currentUser={currentUser} />
        </div>
    )
}

