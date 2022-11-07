import React from 'react'
import { Link } from 'react-router-dom'
import { FootersList } from '../../Constant/index'
import World from '../../Assets/Images/world.svg'
import UnilayerIcon from '../../Assets/Images/unilayerIcon.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {FootersList.map((item, index) => 
                         (
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
                                                                    src={
                                                                        list?.image
                                                                    }
                                                                    alt={
                                                                        list?.image
                                                                    }
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
                        )
                    )}
                </div>
            </div>
            <div className="copyRight">
                <div className="container">
                    <div className="language-list">
                        <div className="row">
                            <div className="col-6">
                                <div className="lange">
                                    <img src={World} alt="World" />
                                    <span>EN</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="lange-list">
                                    <div className="rbc-rate">
                                        <img
                                            src={UnilayerIcon}
                                            alt="Unilayer Icon"
                                        />
                                        <span>$0.072428</span>
                                    </div>
                                    <div className="rbc-bug">
                                        <img
                                            src={UnilayerIcon}
                                            alt="Unilayer Icon"
                                        />
                                        <span>Buy RBC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            © Copyright Unilayer 2022,{' '}
                            <Link to="/"> Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
