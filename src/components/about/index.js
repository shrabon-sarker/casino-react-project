import React from 'react'
import AboutContent from './AboutContent'

function AboutArea() {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                        <AboutContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea
