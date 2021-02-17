import React from 'react'
import {Link} from '@reach/router'

function MenuFooter() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="address">
                <h3>Menu</h3>
                <ul className="Menu_footer">
                    <li className="active"> <Link to="index.html">Home</Link> </li>
                    <li> <Link to="#">About</Link> </li>
                    <li> <Link to="#">Casino</Link> </li>
                    <li> <Link to="#"> Testimonial</Link> </li>
                    <li> <Link to="#">Contact us</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuFooter
