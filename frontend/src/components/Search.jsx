import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const Search = ({ currentUser }) => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/search`);
          setUsers(res.data);
        };
        f();
    }, []);


    return (
        <div>
            <Header currentUser={currentUser} />

            <br />
            <br />

            <p>検索キーワード</p>
            <input type="text" />
            <button>検索</button>

            <br />
            <br />

            <div>
                <ul>
                    {users?.map((b) => (
                    <Link to={`/users/${b.id}`} key={b.id}>
                        <li>{b.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>

            <br />
            <br />

            <Footer currentUser={currentUser} />
        </div>
    )
}

