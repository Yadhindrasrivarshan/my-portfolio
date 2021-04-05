import React from 'react';

import image from '../portfolio-image.jpg'

function Home(){
    return(
        <main>
            <img  src={image} alt="Portfolio Image" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive loading-none lg:leading-snug home-name">Helloo... I'm Yadhindrasrivarshan</h1>
            </section>
        </main>
    )
}

export default Home