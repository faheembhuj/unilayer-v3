import React from 'react'

function CoinCard({ list }) {
    // console.log(image , title, "list");
    return (
        <div className="coins-list">
            <img src={list?.image} alt={list?.title} />
            <span>{list?.title}</span>
        </div>
    )
}

export default CoinCard
