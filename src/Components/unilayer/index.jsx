import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

function Unilayer({ item }) {
    return (
        <div className={`row ${item?.className ? item?.className : ''}`}>
            <div className="col-6">
                <div className="unilayer-img">
                    <img src={item?.image} alt={item?.alttext} />
                </div>
            </div>
            <div className="col-6">
                <h2 className="HeadingH2">
                    <span className="pink-col">{item?.pinkTitle} </span>
                    {item?.title}
                </h2>
                <p className="para">{item?.para}</p>
                {item?.paraTwo ? <p className="para">{item?.paraTwo}</p> : ''}
                {/* {item?.link ? (
                    <ul className="quieks-links">
                        <li>
                            {' '}
                            <Link className="tran-bg-link" to={item?.link}>
                                {item?.linkText} <FaArrowRight />
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link className="tran-bg-link" to={item?.linkTwo}>
                                {item?.linkTowText} <FaArrowRight />
                            </Link>
                        </li>
                    </ul>
                ) : (
                    ''
                )} */}
            </div>
        </div>
    )
}

export default Unilayer
