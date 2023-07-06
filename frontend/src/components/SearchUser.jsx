import { Header } from "./Header";
import { Footer } from "./Footer";
import React from 'react'
import { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import Prefectures from '../common/prefectures';
import Subjects from '../common/subjects';
import Gender from '../common/gender';
import Grade from '../common/grade';

export const SearchUser = ({ currentUser }) => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const f = async () => {
          const res = await axiosInstance.get(`/search`);
          setUsers(res.data);
        };
        f();
    }, []);

    return (
        <>
        <Header currentUser={currentUser} />
        <div class="w-11/12 mx-auto py-20">

            <h1 class="font-semibold text-xl text-center mt-5">ユーザー検索</h1>

            <div class="mb-5">
                <p>性別</p>
                <select class="border border-gray-200 rounded w-full mb-3 h-8">
                    {Gender.GEN_OPTIONS.map(option => {
                        return (<option value={option}>{option}</option>)
                    })}
                </select>
                <p>居住地</p>
                <select class="border border-gray-200 rounded w-full mb-3 h-8">
                    {Prefectures.PREF_OPTIONS.map(option => {
                        return (<option value={option}>{option}</option>)
                    })}
                </select>
                <p>学年</p>
                <select class="border border-gray-200 rounded w-full mb-3 h-8">
                    {Grade.GRD_OPTIONS.map(option => {
                        return (<option value={option}>{option}</option>)
                    })}
                </select>
                <p>専攻分野</p>
                <select class="border border-gray-200 rounded w-full mb-3 h-8">
                    {Subjects.SUB_OPTIONS.map(option => {
                        return (<option value={option}>{option}</option>)
                    })}
                </select>
                <p>研究キーワード</p>
                <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" />
                <p>興味分野</p>
                <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" />
                <p>趣味</p>
                <input type="text" class="border border-gray-200 rounded w-full mb-3 h-8" />
            </div>

            <button type='submit' class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
                検索する
            </button>

        </div>
        <Footer currentUser={currentUser} />
    </>
    )
}

