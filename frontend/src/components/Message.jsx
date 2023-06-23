import React from 'react';
import styles from '../css/style.module.css';
import peopleimg from '../images/people.jpg';
import { Link } from "react-router-dom";
import arrowsvg from '../images/arrow.svg';
import camerasvg from '../images/camera.svg';
import imagessvg from '../images/images.svg';
import sendsvg from '../images/send.svg';

export const Message = ({ currentUser }) => {

    return (
        <div class="">
            <div class="flex p-2 fixed top-20 bg-white bg-opacity-80 w-full z-10">
                <img src={arrowsvg} class="w-4 mr-2 rotate-180" alt="" />
                <p class="text-xl font-semibold">たけし</p>
            </div>

            <div class="mt-20 -z-10">
                <div class={styles.balloon_r}>
                    <img src={peopleimg} class="w-10 h-10 object-cover rounded-full mr-3" alt="" />
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                    <span class="mt-auto">10:24</span>
                </div>

                <div class={styles.balloon_s}>
                    <span class="mt-auto">10:24</span>
                    <p>これは会話の</p>
                </div>
                <div class={styles.balloon_r}>
                    <img src={peopleimg} class="w-10 h-10 object-cover rounded-full mr-3" alt="" />
                    <p>これは会話のテ</p>
                    <span class="mt-auto">10:24</span>
                </div>

                <div class={styles.balloon_s}>
                    <span class="mt-auto">10:24</span>
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                </div>
                <div class={styles.balloon_r}>
                    <img src={peopleimg} class="w-10 h-10 object-cover rounded-full mr-3" alt="" />
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                    <span class="mt-auto">10:24</span>
                </div>

                <div class={styles.balloon_s}>
                    <span class="mt-auto">10:24</span>
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                </div>
                <div class={styles.balloon_r}>
                    <img src={peopleimg} class="w-10 h-10 object-cover rounded-full mr-3" alt="" />
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                    <span class="mt-auto">10:24</span>
                </div>

                <div class={styles.balloon_s}>
                    <span class="mt-auto">10:24</span>
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                </div>
                <div class={styles.balloon_r}>
                    <img src={peopleimg} class="w-10 h-10 object-cover rounded-full mr-3" alt="" />
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                    <span class="mt-auto">10:24</span>
                </div>

                <div class={styles.balloon_s}>
                    <span class="mt-auto">10:24</span>
                    <p>これは会話のテストです。これは会話のテストです。これは会話のテストです。これは会話のテストです。</p>
                </div>
            </div>

            <div class="h-6"></div>

            <div class="bg-gray-300 w-full flex fixed bottom-16">
                <img src={camerasvg} class="w-5 m-1" alt="" />
                <img src={imagessvg} class="w-5 m-1" alt="" />
                <textarea name="" id="" cols="30" rows="1" class="w-3/4 m-1 border border-gray-200 rounded h-7"></textarea>
                <img src={sendsvg} class="w-5 m-1" alt="" />
            </div>
        </div>
    )
}

