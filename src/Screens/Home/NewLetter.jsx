import React from 'react'

function NewLetter() {
    return (
        <section className="new-letter">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="HeadingH3">
                            Subscribe to our Newsletter
                        </h3>
                    </div>
                    <div className="col-6">
                        <div className="new-field">
                            <form>
                                <input type="email" placeholder="Email" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewLetter
