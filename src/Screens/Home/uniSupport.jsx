import React from 'react'
import CoinCard from '../../Components/CionCard'
import { Supporter } from '../../Constant'

function UniSupport() {
    return (
        <section className="unilayer-support">
            <div className="container">
                <h1 className="HeadingH1">
                    <span className="pink-col">UNILAYER</span> SUPPORTS
                </h1>
                {Supporter.map((item, index) => {
                    return (
                        <div key={index}>
                            <p className="pink-col">{item?.PinkSubTitle}</p>
                            <div className="row" key={index}>
                                {item?.SupportorImages.map((lists, indx) => {
                                    console.log(lists, 'lists')
                                    return (
                                        <div className="col-3" key={indx}>
                                            <CoinCard list={lists} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default UniSupport
