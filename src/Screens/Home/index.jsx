import React from 'react'
import About from './about'
import Banner from './Banner'
import Documentation from './Documentation'
import NewLetter from './NewLetter'
import Posts from './Posts'
import './Style.css'
import UnilayerBeyond from './unibeyond'
import UniSupport from './uniSupport'

function Home() {
    return (
        <div className ="Main-home">
            <Banner />
            <Posts />
            <About />
            <UniSupport />
            <UnilayerBeyond />
            <Documentation />
            <NewLetter />
        </div>
    )
}

export default Home
