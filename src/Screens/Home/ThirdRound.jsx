import React from 'react'
import { ThirdRoundList } from '../../Constant/index'

function ThirdRound() {
    return (
        <section className="third-round">
            <div className="container">
                <h1 className="HeadingH1">
                    THE 3RD ROUND OF STAKING
                    <span className="pink-col"> HAS STARTED</span>
                </h1>
                <div className="row">
                    {ThirdRoundList.map((item, index) => {
                        return (
                            <div className="col-4" key={`${index + 1}`}>
                                <div className="round-item">
                                    <div className="item-img">
                                        <img
                                            src={item?.image}
                                            alt={item?.title}
                                        />
                                    </div>
                                    <div className="item-content">
                                        <h4 className="HeadingH4">
                                            {item?.title}
                                        </h4>
                                        <p className="para">{item?.para}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ThirdRound
