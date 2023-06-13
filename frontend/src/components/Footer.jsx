import React from 'react'
import { Link } from "react-router-dom";

export const Footer = ({ currentUser }) => {    

    return (
        <div>
            <div>
                <Link to={`/search`}>検索</Link>
                <br />
                <Link to={`/users/${{ currentUser }.currentUser.id}`}>マイページ</Link>
                <br />
                <Link to={`/directMessages`}>DM</Link>
                <br />
                <Link to={`/boards`}>掲示板</Link>
                <br />
            </div>
        </div>
    )
}

