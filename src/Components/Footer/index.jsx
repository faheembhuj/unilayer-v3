import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'
import { FooterLinks } from '../../Constant/index'
import Twitter from '../../Assets/Images/Twitter.svg'
import Telegram from '../../Assets/Images/Telegram.svg'
import Medium from '../../Assets/Images/Medium.svg'
import Discord from '../../Assets/Images/Discard.svg'
import Envelope from '../../Assets/Images/envelope.png'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="site-logo-details">
                            <div className="logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <p className="para">
                                Unilayer introduces much-needed trade automation
                                tools and new token economics on top of the
                                fundamental building blocks of Uniswap and its
                                on-chain infrastructure.
                            </p>
                            <span className="para">
                                Copyright © 2020 Unilayer. All rights reserved.
                            </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="community-links">
                            <h3>LINKS</h3>
                            <div className="link-list">
                                {FooterLinks.map((item, index) => {
                                    return (
                                        <ul key={`${index + 1}`}>
                                            {item?.LinkGroup.map(
                                                (list, indx) => {
                                                    return (
                                                        <li key={`${indx + 1}`}>
                                                            <a
                                                                href={list?.link}
                                                            >
                                                                {list?.linkText}
                                                            </a>
                                                        </li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="social-icon">
                            <h3>CONTACT US</h3>
                            <ul>
                                <li>
                                    <a href="https://t.me/Unilayer" target="_blank"  rel="noreferrer"  >
                                        <img src={Telegram} alt="Telegram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/unilayer_" target="_blank" rel="noreferrer" >
                                        <img src={Twitter} alt="Twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer"  href="https://medium.com/@UniLayer/unilayer-next-generation-decentralised-trading-platform-524e458ec7ff" target="_blank">
                                        <img src={Medium} alt="Medium" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.com/invite/BV5y3dd" target="_blank" rel="noreferrer" >
                                        <img src={Discord} alt="Discord" />
                                    </a>
                                </li>
                            </ul>
                            <a
                                className="mail-link"
                                href="mailto:contact@unilayer.app"
                            >
                                <img src={Envelope} alt="Email Box" />
                                contact@unilayer.app
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
