import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
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

    const user_id = board?.user_id;
    const board_title = board?.title;
    const board_content = board?.content;

    return (
        <div>

            <p>ユーザIDは"{user_id}"</p>

            <p>タイトルは"{board_title}"</p>

            <p>内容は"{board_content}"</p>

            <br />
            <br />

            {user_id == { currentUser }.currentUser.id && <Link to={`/board/${params.id}/edit`}>編集する</Link>}

        </div>
    )
}

