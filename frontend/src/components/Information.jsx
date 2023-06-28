import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";
import moment from 'moment';


export const Information = ({ currentUser }) => {

  const [infoData, setInfoData] = useState();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/information`);
      setInfoData(res.data);
    };
    f();
  }, []);

  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">お知らせ</h1>

      <div class="mt-5">
        {infoData?.map((infoData) => (
          <Link to={`/info/${infoData.id}`} class="w-full inline-block border bg-gray-100 p-1 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="flex">
              <span class="bg-red-600 text-white text-xs rounded-sm my-auto py-0.5 px-2 mr-2">重要</span>
              <h1 class="font-semibold text-xl">{infoData.title}</h1>
            </div>
            <p class="my-auto px-2">{moment(infoData.created_at).format('MM/DD')}</p>
          </div>
          <p class="text-sm p-1 m-0 w-full overflow-hidden whitespace-nowrap text-ellipsis">{infoData.body}</p>
        </Link>
        ))}
      </div>
    </div >
  )
}

