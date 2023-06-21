import React from 'react'
import search from '../images/search.svg';
import peopleimg from '../images/people.jpg';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios.js";

export const Home = ({ currentUser }) => {

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
            <div class="flex justify-between py-4 px-2">
                <h1 class="text-xl font-semibold">さがす</h1>
                <Link to={'/search'} class="flex justify-between border bg-gray-100 rounded w-3/4">
                    <span class="my-auto mx-2 text-gray-600">条件で絞り込む</span>
                    <img src={search} alt="logo" class="w-4 my-auto mx-1"/>
                </Link>
            </div>

            <div class="flex flex-wrap">
                {users?.map((user) => (
                    <Link to={`/users/${user.id}`} key={user.id} class="w-1/2 p-1">
                        <div class="border bg-gray-200 border00 rounded m-auto">
                            <img src={peopleimg} alt="" />
                            <div class="flex justify-between w-11/12 mx-auto my-1">
                                <h2 class="text-xl font-semibold my-auto tracking-widest">{user.name}</h2>
                                <div class="text-xs text-gray-400 text-center">
                                    <p>生物学専攻</p>
                                    <div class="flex">
                                        <p class="mx-1">24歳</p>
                                        <p>東京都</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-11/12 mx-auto">
                                <p class="text-xs">
                                    東京大学大学院で生物学について研究しています。広告分野にきょうみがあります。最近そろのみにはまっています。
                                </p>
                                <div class="pb-2">
                                    <div id="search_tag" class="mt-1">
                                        <span class="bg-yellow-100 border rounded p-1 mr-1 text-xs">生物学</span>
                                        <span class="bg-yellow-100 border rounded p-1 mr-1 text-xs">獣医</span>
                                        <span class="bg-yellow-100 border rounded p-1 mr-1 text-xs">微生物</span>
                                    </div>
                                    <div id="interest_tag" class="mt-1">
                                        <span class="bg-green-100 border rounded p-1 mr-1 text-xs">広告</span>
                                        <span class="bg-green-100 border rounded p-1 mr-1 text-xs">航空宇宙</span>
                                        <span class="bg-green-100 border rounded p-1 mr-1 text-xs">教育</span>
                                    </div>
                                    <div id="hobby_tag" class="mt-1">
                                        <span class="bg-red-100 border rounded p-1 mr-1 text-xs">釣り</span>
                                        <span class="bg-red-100 border rounded p-1 mr-1 text-xs">ハッカソン</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}

