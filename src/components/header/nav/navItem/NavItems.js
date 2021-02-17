import React from 'react'
import {Link} from '@reach/router'
import SearchIcon from '../../../../assets/images/search_icon.png';

function NavItems() {
    return (
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <div className="menu-area">
                <div className="limit-box">
                    <nav className="main-menu">
                        <ul className="menu-area-main">
                            <li className="active"> <Link to="index.html">Home</Link> </li>
                            <li> <Link to="#about">About</Link> </li>
                            <li> <Link to="#casino">Casino</Link> </li>
                            <li> <Link to="#testimonial">Testimonial</Link> </li>
                            <li> <Link to="#booktable">Book Table</Link> </li>
                            <li className="mean-last">
                                <Link to="#"><img src={SearchIcon} alt="#" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavItems
