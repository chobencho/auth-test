import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
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
        <div>
            <Header currentUser={currentUser} />

            <br />
            <br />

            <p>タイトル</p>
            <input type="text" value={title} defaultValue="" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <p>内容</p>
            <textarea name="" id="" cols="30" rows="10" value={content} defaultValue="" onChange={(e) => setContent(e.target.value)} ></textarea>

            <br />
            <br />

            <button type='submit' onClick={(e) => { handleCreateBoard(e) }}>掲示板を作成する</button>

            
            <br />
            <br />
            

            <Footer currentUser={currentUser} />
        </div>
    )
}

