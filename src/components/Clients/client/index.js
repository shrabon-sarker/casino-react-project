import React from 'react'
import Cli from '../../../assets/images/cli.jpg'

function Person() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="clients_box">
                    <i><img src={Cli} alt="#"/></i>
                    <h3>Jone Mark</h3>
                    <span><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, <i className="fa fa-quote-right"></i></span>

                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        <br /> veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                        <br />consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>

                </div>
            </div>
        </div>
    )
}

export default Person
