import React, { useState, useCallback } from 'react'
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

    const handleClick = (event) => {
        setIsActive((current) => !current)
    }

    const onClickOutsideBoxOneCallback = useCallback(() => {
        // console.log('onClickOutsideBoxOneCallback', { boxOneRef, isBoxOneOpen })
        if ((current) => !current) return false
        setIsActive(false)
    }, [isActive])

    // const useClickOutside
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
                                        <a href="#">Buy Unilayer</a>
                                    </li>
                                    <li>
                                        <a href="#">Staking</a>
                                    </li>
                                    <li>
                                        <a href="#">Docs</a>
                                    </li>
                                    <li>
                                        <a onClick={handleClick}>
                                            {isActive ? (
                                                <img src={CLose} alt="CLose" />
                                            ) : (
                                                <img
                                                    src={Toggle}
                                                    alt="Toggle"
                                                />
                                            )}
                                        </a>
                                    </li>
                                    {isActive ? (
                                        <ul
                                            className={`sub-menu ${
                                                isActive ? 'Active' : ''
                                            }`}
                                        >
                                            <li>
                                                <a href="">
                                                    <img
                                                        src={Cryptocurrencies}
                                                        alt="All Cryptocurrencies"
                                                    />
                                                    All Cryptocurrencies
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img
                                                        src={Widget}
                                                        alt="Widget Setup"
                                                    />
                                                    Widget Setup
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={SDK} alt="SDK" />
                                                    SDK
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img
                                                        src={Security}
                                                        alt="Security"
                                                    />
                                                    Security
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img
                                                        src={LAYER}
                                                        alt="LAYER Token"
                                                    />
                                                    LAYER Token
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img
                                                        src={FiatonRamp}
                                                        alt="Fiat-on-Ramp"
                                                    />
                                                    Fiat-on-Ramp
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img
                                                        src={Team}
                                                        alt="Team"
                                                    />
                                                    Team
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={FAQ} alt="FAQ" />
                                                    FAQ
                                                </a>
                                            </li>
                                        </ul>
                                    ) : (
                                        ''
                                    )}
                                    <li className="menuBtn">
                                        <a href="#">Launch App</a>
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
