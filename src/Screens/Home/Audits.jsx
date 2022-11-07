import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CoinCard from '../../Components/CionCard'
import { AuditsList } from '../../Constant/index'

function Audits() {
    return (
        <section className="uni-grant audits">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="HeadingH1">
                            <span className="pink-col">UNILAYER</span> Audits
                        </h1>
                        <div className="row">
                            {AuditsList.map((item, index) => {
                                return (
                                    <div className="col-6" key={`${index + 1}`}>
                                        <p className="para">{item?.para}</p>
                                        <CoinCard list={item?.supportList} />
                                        <Link
                                            className="tran-bg-link"
                                            to={item?.link}
                                        >
                                            {item?.linkText} <FaArrowRight />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Audits
