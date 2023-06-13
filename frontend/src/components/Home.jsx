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
            
            <Footer currentUser={currentUser} />
        </div>
    )
}

