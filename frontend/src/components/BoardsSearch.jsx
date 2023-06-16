import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const BoardsSearch = ({ currentUser }) => {

    const [searchKeyword, setSearchKeyword] = useState();
    const [boards, setBoards] = useState();
    const params = useParams();

    const history = useHistory();

    const handleSearchKeywordOnBoard = async (e) => {
        history.push(`/boards/search/${searchKeyword}`);
    }

    useEffect(() => {
        const f = async () => {
            const res = await axiosInstance.get(`/boards/search/${params.id}`);
            setBoards(res.data);
        };
        f();
    }, []);


    return (
        <div>
            <p>検索キーワード</p>
            <input type="text" value={searchKeyword} defaultValue="" onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type='submit' onClick={(e) => { handleSearchKeywordOnBoard(e) }}>検索</button>

            <br />
            <br />

            <Link to={`/boardCreate`}>新規作成</Link>

            <br />
            <br />

            <p>掲示板一覧</p>
            <div>
                <ul>
                    {boards?.map((b) => (
                        <Link to={`/board/${b.id}`} key={b.id}>
                            <li>{b.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}

