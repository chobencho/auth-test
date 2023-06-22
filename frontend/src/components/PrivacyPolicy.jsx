import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../utils/axios.js";

export const PrivacyPolicy = ({ currentUser }) => {

  return (
    <div class="w-11/12 mx-auto">
      <h1 class="font-semibold text-xl text-center mt-5">プライバシーポリシー</h1>

      <p>
        これはプライバシーポリシーです。破ったらぶっとばします。まじで。
        これはプライバシーポリシーです。破ったらぶっとばします。まじで。
        これはプライバシーポリシーです。破ったらぶっとばします。まじで。
        これはプライバシーポリシーです。破ったらぶっとばします。まじで。
      </p>
    </div >
  )
}

