import React from 'react'
import {Link} from '@reach/router'

function CasinoContent() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div className="text-bg">
                <h1>Welcome to  <br /> <strong className="b_bold">Our casino </strong></h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</span>
                <Link to="#">Contact Us</Link><Link to="#">Book Online</Link>
            </div>
        </div>
    )
}

export default CasinoContent
