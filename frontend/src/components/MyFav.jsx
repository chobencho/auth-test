import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";


export const MyFav = ({ currentUser }) => {

  return (
    <div class="">
      <h1 class="font-semibold text-xl text-center mt-5">いいねをくれたユーザー</h1>
    </div >
  )
}

