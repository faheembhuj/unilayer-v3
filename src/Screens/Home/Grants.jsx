import React from 'react'
import CoinCard from '../../Components/CionCard'
import { GrantsList } from '../../Constant/index'

function Grants() {
    return (
        <section className="uni-grant">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="HeadingH1">
                            <span className="pink-col">UNILAYER</span> GRANTS
                        </h1>
                        <p className="para">
                            Unilayer has won grants from numerous major
                            blockchain platforms.
                        </p>
                        <div className="row">
                            {GrantsList.map(( item , index) => {
                                return (
                                    <div className="col-4" key={index}>
                                        <CoinCard list={item} />
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

export default Grants
