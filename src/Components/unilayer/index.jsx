import React from 'react'

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
            </div>
        </div>
    )
}

export default Unilayer
