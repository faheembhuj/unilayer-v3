import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../Assets/Images/dashborad.png'

function Banner() {
    return (
        <section className="hero-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="HeadingH1">
                            <span className="pink-col">ONE-CLICK   </span>
                            CROSS-CHAIN
                        </h1>
                        <p className="para">
                            Rubic can swap any of 15,000+ tokens, on and between
                            13 blockchains in one transaction
                        </p>
                        {/* <Link className="actionBtn" to="/">
                            CHECK IT OUT
                        </Link> */}

                        <div className="hero-img">
                            <img src={HeroImg} alt="HeroImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
