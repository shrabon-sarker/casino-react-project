import React from 'react'
import Arrow from './Arrow'
import Slide from './Slide'


function Slider() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
                    <div className="carousel-inner">
                        <Slide />
                    </div>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}

export default Slider
