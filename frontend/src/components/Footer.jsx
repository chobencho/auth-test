import search from '../images/search.svg';
import mypage from '../images/people.svg';
import message from '../images/message.svg';
import board from '../images/board.svg';
import React from 'react'
import { Link } from "react-router-dom";

export const Footer = ({ currentUser }) => {    

    return (
        <div class=" bg-red-100 flex justify-between text-center text-xs py-2 fixed bottom-0 w-full">

            <Link to={`/`} class="w-1/4">
                <img src={search} alt="logo" class="w-7 mx-auto mb-1"/>
                ユーザー検索
            </Link>
            <Link to={`/boards`} class="w-1/4">
                <img src={board} alt="logo" class="w-7 mx-auto mb-1"/>
                掲示板
            </Link>
            <Link to={`/directMessages`} class="w-1/4">
                <img src={message} alt="logo" class="w-7 mx-auto mb-1"/>
                メッセージ
            </Link>
            <Link to={`/mypage/${{ currentUser }.currentUser.id}`} class="w-1/4">
                <img src={mypage} alt="logo" class="w-7 mx-auto mb-1"/>
                マイページ
            </Link>
        </div>

    )
}

