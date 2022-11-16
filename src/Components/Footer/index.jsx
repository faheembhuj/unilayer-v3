import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'
import { FooterLinks } from '../../Constant/index'

/* import Logo from '../../Assets/Images/Logo.svg'
import World from '../../Assets/Images/world.svg'
import UnilayerIcon from '../../Assets/Images/unilayerIcon.svg' */
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
                                                            <Link
                                                                to={list?.link}
                                                            >
                                                                {list?.linkText}
                                                            </Link>
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
                                    <a href="#">
                                        <img src={Telegram} alt="Telegram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={Twitter} alt="Twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={Medium} alt="Medium" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
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
                    {/* {FootersList.map((item, index) => (
                        <div className="col-3" key={`${index + 1}`}>
                            <div className="community-links">
                                <h3>{item?.footertitle}</h3>
                                <ul>
                                    {item?.footerLinks.map((list, indx) => (
                                        <li key={`${indx + 1}`}>
                                            <Link to={list?.link}>
                                                {list?.image ? (
                                                    <div className="link-icon">
                                                        <img
                                                            src={list?.image}
                                                            alt={list?.image}
                                                        />
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                                {list?.linkText}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
