import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

export const DirectMessages = ({ currentUser }) => {


    

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

