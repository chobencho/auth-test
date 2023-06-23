import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const SearchBoard = ({ currentUser }) => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/search`);
          setUsers(res.data);
        };
        f();
    }, []);


    return (
        <div class="w-11/12 mx-auto">

            <h1 class="font-semibold text-xl text-center mt-5">ユーザー検索</h1>

            <div class="mb-5">
                <p>検索キーワード</p>
                <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" />
            </div>

            <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
                検索する
            </button>

        </div>
    )
}

