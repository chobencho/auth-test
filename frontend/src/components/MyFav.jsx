import { Header } from "./Header";
import { Footer } from "./Footer";
import React from 'react'

import people from '../images/people.jpg';



export const MyFav = ({ currentUser }) => {

  return (
    <>
    <Header currentUser={currentUser} />
    <div class="py-20">
      <h1 class="font-semibold text-xl text-center mt-5">いいねをくれたユーザー</h1>

    </div >
    <Footer currentUser={currentUser} />
    </>
  )
}

