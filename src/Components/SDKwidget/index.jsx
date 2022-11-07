import React from 'react'
// import App from "../../Assets/Images/apps.svg";

function SdkWidget({ item }) {
    // console.log(item?.Integrate, "item?.Integrate");
    return (
        <div className="col-12">
            <div className="sdk-content">
                <h2 className="HeadingH2">
                    <span className="pink-col">{item?.pinkTitle}</span>{' '}
                    {item?.title}
                </h2>
                <h3 className="HeadingH3">{item?.subTitle}</h3>
                <p className="para">{item?.para}</p>
                {item?.paraTwo ? <p className="para">{item?.paraTwo}</p> : ''}
                {item?.image ? (
                    <div className="connent-wallet">
                        <img src={item?.image} alt="Wallet" />
                    </div>
                ) : (
                    ''
                )}
                <a className="actionBtn" href={item?.Link}>
                    {item?.linkText}
                </a>
            </div>
            {item?.Integrate ? (
                <>
                    {item?.Integrate.map((item, index) => {
                        return (
                            <div className="icon-box" key={index}>
                                <span>{item?.integrateTitle}</span>
                                <ul>
                                    {item?.integrateList.map((list, indx) => {
                                        return (
                                            <li key={indx}>
                                                {list?.image ? (
                                                    <img
                                                        src={list?.image}
                                                        alt={list?.Title}
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                                {list?.Title}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </>
            ) : (
                ''
            )}
            {/* <div className="icon-box">
        <span>Additional Trading Volume and Revenue</span>
        <ul>
          <li>Profit Sharing: Earn Up To 50% of Fees</li>
          <li>Profit Sharing: Earn Up To 50% of Fees</li>
          <li>Profit Sharing: Earn Up To 50% of Fees</li>
          <li>Profit Sharing: Earn Up To 50% of Fees</li>
        </ul>
      </div>
     */}
        </div>
    )
}

// SdkWidget.propTypes = {
//     item: PropTypes.O.isRequired,
// }
export default SdkWidget
