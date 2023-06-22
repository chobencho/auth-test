import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";

export const Inquiry = ({ currentUser }) => {

  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">お問い合わせ</h1>

      <p>
        下記のアドレスにお問い合わせください。
      </p>
      <p>~~@gmail.com</p>
    </div >
  )
}

