import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'


function Header() {

    return (
        <header className="header">
            <div className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="site-logo">
                                <Link to="/">
                                    <img src={Logo} alt="Unilayer" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
