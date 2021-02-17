import React from 'react'
import FormBook from './BookFrom'
import Bookhead from './BookFrom/Bookhead'
import FormImg from './BookFrom/FormImg'

function Booktable() {
    return (
        <div id="booktable" className="contact">
            <div className="container">
                <Bookhead />
                <div className="white_bg">
                    <div className="row">

                        <FormBook />
                        <FormImg />
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Booktable
