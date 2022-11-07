import React from 'react'
import { PostsList } from '../../Constant'

function Posts() {
    return (
        <section className="post-items">
            <div className="container">
                <div className="row">
                    {PostsList.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div className="card">
                                    <h3 className="HeadingH4">{item?.title}</h3>
                                    <div className="card-img">
                                        <img
                                            src={item?.image}
                                            alt={item?.alt}
                                        />
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

export default Posts
