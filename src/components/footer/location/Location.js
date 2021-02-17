import React from 'react'
import {Link} from '@reach/router'
import One from '../../../assets/icon/1.png';
import Tow from '../../../assets/icon/2.png';
import Three from '../../../assets/icon/3.png';

function Location() {
    return (
        <div className="col-md-10 offset-md-1">
            <div className="location_section">
                <ul className="loca">
                    <li>
                        <Link to="#"><img src={One} alt="#" /></Link>demo@gmail.com </li>
                    <li>
                        <Link to="#"><img src={Tow} alt="#" /></Link>(+71 1234567890) </li>
                    <li>
                        <Link to="#"><img src={Three} alt="#" /></Link>Location </li>
                </ul>
            </div>
        </div>
    )
}

export default Location
