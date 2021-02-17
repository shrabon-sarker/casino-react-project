import React from 'react'
import CasinoContent from './CasinoConten'
import CasinoImage from './CasinoImage'

function Horo() {
    return (
        <section className="slider_section">
            <div className="banner_main">
                <div className="container">
                    <div className="row">
                        <CasinoContent />
                        <CasinoImage />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Horo
