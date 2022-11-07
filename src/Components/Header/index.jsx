import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'
import Toggle from '../../Assets/Images/toggle.svg'
import Cryptocurrencies from '../../Assets/Images/Crypto.svg'
import Widget from '../../Assets/Images/Widget.svg'
import SDK from '../../Assets/Images/SDK.svg'
import Security from '../../Assets/Images/Security.svg'
import LAYER from '../../Assets/Images/Token.svg'
import FiatonRamp from '../../Assets/Images/Fiatramp.svg'
import Team from '../../Assets/Images/Team.svg'
import FAQ from '../../Assets/Images/Faq.svg'
import CLose from '../../Assets/Images/CLose.svg'

function Header() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive((current) => !current)
    }

    return (
        <header className="header">
            <div className="topbar">
                <p className="paraprimary">
                    Stake Unilayer for up to 58% APR{' '}
                    <Link to="/about">
                        Learn more <FaArrowRight />
                    </Link>
                </p>
            </div>
            <div className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="site-logo">
                                <img src={Logo} alt="Unilayer" />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link to="/">Buy Unilayer</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Staking</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Docs</Link>
                                    </li>
                                    <li>
                                        <span onClick={handleClick}>
                                            {isActive ? (
                                                <img src={CLose} alt="CLose" />
                                            ) : (
                                                <img
                                                    src={Toggle}
                                                    alt="Toggle"
                                                />
                                            )}
                                        </span>
                                    </li>
                                    {isActive ? (
                                        <ul
                                            className={`sub-menu ${
                                                isActive ? 'Active' : ''
                                            }`}
                                        >
                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={Cryptocurrencies}
                                                        alt="All Cryptocurrencies"
                                                    />
                                                    All Cryptocurrencies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={Widget}
                                                        alt="Widget Setup"
                                                    />
                                                    Widget Setup
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img src={SDK} alt="SDK" />
                                                    SDK
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={Security}
                                                        alt="Security"
                                                    />
                                                    Security
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={LAYER}
                                                        alt="LAYER Token"
                                                    />
                                                    LAYER Token
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={FiatonRamp}
                                                        alt="Fiat-on-Ramp"
                                                    />
                                                    Fiat-on-Ramp
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img
                                                        src={Team}
                                                        alt="Team"
                                                    />
                                                    Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <img src={FAQ} alt="FAQ" />
                                                    FAQ
                                                </Link>
                                            </li>
                                        </ul>
                                    ) : (
                                        ''
                                    )}
                                    <li className="menuBtn">
                                        <Link to="/">Launch App</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
