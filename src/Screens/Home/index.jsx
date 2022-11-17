import React from 'react'
import About from './about'
import Banner from './Banner'
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
        </div>
    )
}

export default Home
