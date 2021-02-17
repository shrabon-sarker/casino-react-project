import React from 'react'
import {Link} from '@reach/router'

function FooterLink() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="address">
                <h3>Links</h3>
                <ul className="Links_footer">
                    <li className="active"> <Link to="index.html">Lorem Ipsum </Link> </li>
                    <li> <Link to="#">Simply random</Link> </li>
                    <li> <Link to="#">Roots in a</Link> </li>
                    <li> <Link to="#"> Piece</Link> </li>
                    <li> <Link to="#">classNameical</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLink
