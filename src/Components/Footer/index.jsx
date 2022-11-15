import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'
import { FootersList } from '../../Constant/index'
import World from '../../Assets/Images/world.svg'
import UnilayerIcon from '../../Assets/Images/unilayerIcon.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {FootersList.map((item, index) => (
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
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
