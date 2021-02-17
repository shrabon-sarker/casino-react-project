import React from 'react'
import NavLogo from './logo/Logo'
import NavItems from './navItem/NavItems'

function Navbar() {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <NavLogo />
                    <NavItems />
                </div>
            </div>
        </div>
    )
}

export default Navbar
