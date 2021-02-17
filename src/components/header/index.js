import React from 'react'
import Horo from './Horo'
import Navbar from './nav'

function Header() {
    return (
        <header>
            {/* header inner  */}
            <div className="header-top">
                <Navbar />
                <Horo />
            </div>     
        </header>
    )
}

export default Header
