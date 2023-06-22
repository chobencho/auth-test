import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";

export const Terms = ({ currentUser }) => {

  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">利用規約</h1>

      <p>
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
        これは利用規約です。破ったらぶっとばします。まじで。
      </p>
    </div >
  )
}

