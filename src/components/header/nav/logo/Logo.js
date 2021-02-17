import React from 'react'
import {Link} from '@reach/router'
import Logo from '../../../../assets/images/logo.png';

function NavLogo() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
                <div className="center-desk">
                    <div className="logo">
                        <Link to="index.html"><img src={Logo} alt="#" /></Link>
                    </div>
                </div>
            </div>
        </div>
)
}

export default NavLogo
