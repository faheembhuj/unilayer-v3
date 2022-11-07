import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Documentation() {
    return (
        <section className="document">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="document-item">
                            <div className="docment-content">
                                <h2 className="HeadingH2">DOCUMENTATION</h2>
                                <p className="para">
                                    Find out more about our Cross-Chain solution
                                    and platform.
                                </p>
                            </div>
                            <Link className="tran-bg-link" to="/">
                                Learn more <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Documentation
