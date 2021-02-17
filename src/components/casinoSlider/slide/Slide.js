import React from 'react'
import BinnerImg from '../../../assets/images/banner.png'

function Slide() {
    return (
        <div className="carousel-item active">
            <img className="first-slide" src={BinnerImg} alt="First slide" />
            <div className="container">
                <div className="carousel-caption relative">
                    <p>Chips Gambling Card Game Casino Chips Gamble</p>
                </div>
            </div>
        </div>
    )
}

export default Slide
