import React from 'react'
import peopleimg from '../images/people.jpg';
import { Link } from "react-router-dom";

export const DirectMessages = ({ currentUser }) => {

    return (
        <div class="">

            <Link to={`/message`} class="flex py-1 px-2">
                <img src={peopleimg} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
                <div class="">
                    <div class="flex justify-between mb-1">
                        <p class="text-base font-semibold">たけし</p>
                        <p class="my-auto">10:24</p>
                    </div>
                    <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
                </div>
            </Link>
            <Link to={`/message`} class="flex py-1 px-2">
                <img src={peopleimg} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
                <div class="">
                    <div class="flex justify-between mb-1">
                        <p class="text-base font-semibold">たけし</p>
                        <p class="my-auto">10:24</p>
                    </div>
                    <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
                </div>
            </Link>
            <Link to={`/message`} class="flex py-1 px-2">
                <img src={peopleimg} class="w-14 h-14 object-cover rounded-full mr-3" alt="" />
                <div class="">
                    <div class="flex justify-between mb-1">
                        <p class="text-base font-semibold">たけし</p>
                        <p class="my-auto">10:24</p>
                    </div>
                    <p class="text-xs">はじめまして。たけしと申します。突然のご連絡しつれいいたします。</p>
                </div>
            </Link>

        </div>
    )
}

