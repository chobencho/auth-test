import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import people from '../images/people.jpg';

export const Messages = ({ currentUser }) => {



  return (
    <>
      <Header currentUser={currentUser} />

      <div class="py-20">

        <Link to={`/message`} class="flex py-1 px-2">
          <img src={people} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
          <div class="">
            <div class="flex justify-between mb-1">
              <p class="text-base font-semibold">たけし</p>
              <p class="my-auto">10:24</p>
            </div>
            <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
          </div>
        </Link>
        <Link to={`/message`} class="flex py-1 px-2">
          <img src={people} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
          <div class="">
            <div class="flex justify-between mb-1">
              <p class="text-base font-semibold">たけし</p>
              <p class="my-auto">10:24</p>
            </div>
            <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
          </div>
        </Link>
        <Link to={`/message`} class="flex py-1 px-2">
          <img src={people} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
          <div class="">
            <div class="flex justify-between mb-1">
              <p class="text-base font-semibold">たけし</p>
              <p class="my-auto">10:24</p>
            </div>
            <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
          </div>
        </Link>

      </div>

      <Footer currentUser={currentUser} />
    </>

  )
}

