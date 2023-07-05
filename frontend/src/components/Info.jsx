import { Header } from "./Header";
import { Footer } from "./Footer";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { axiosInstance } from "../utils/axios.js";

export const Info = ({ currentUser }) => {

  const params = useParams();
  const navigate = useNavigate();

  const [infoData, setInfoData] = useState();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/info/${params.id}`);
      setInfoData(res.data);
    };
    f();
  }, []);

  const handleBackInformation = () => {
    navigate(`/information`);
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div class="w-11/12 mx-auto py-20">
        <div class="flex justify-between">
          <h1 class="font-semibold text-xl">{infoData?.title}</h1>
          <p class="my-auto">{moment(infoData?.created_at).format('YYYY/MM/DD HH:mm')}</p>
        </div>
        <p class="my-3 whitespace-pre-wrap">
          {infoData?.body}
        </p>

        <button type='submit' onClick={handleBackInformation} class="block border border-gray-200 bg-green-500 text-white text-center text-xs py-2 mx-auto w-1/2" >
          戻る
        </button>
      </div >
      <Footer currentUser={currentUser} />
    </>

  )
}

