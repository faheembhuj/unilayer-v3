import React from 'react'
import About from './about'
import Audits from './Audits'
import Banner from './Banner'
import Documentation from './Documentation'
import Grants from './Grants'
import NewLetter from './NewLetter'
import Posts from './Posts'
import SDK from './SDK'

import './Style.css'
import ThirdRound from './ThirdRound'
import UnilayerBeyond from './unibeyond'
import UniSupport from './uniSupport'
import Widget from './Widget'

function Home() {
    return (
        <div className="Main-home">
            <Banner />
            <Posts />
            <About />
            <UniSupport />
            <UnilayerBeyond />
            <SDK />
            <Widget />
            <Grants />
            <Audits />
            <ThirdRound />
            <Documentation />
            <NewLetter />
        </div>
    )
}

export default Home
