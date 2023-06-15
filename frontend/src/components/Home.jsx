import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

export const Home = ({ currentUser }) => {

    return (
        <div>
            <Header currentUser={currentUser} />

            <br />
            <br />
            <br />

            <p class="text-3xl font-bold underline">Hello world!</p>
            
            <Footer currentUser={currentUser} />
        </div>
    )
}

