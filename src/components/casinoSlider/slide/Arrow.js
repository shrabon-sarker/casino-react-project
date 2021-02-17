import React from 'react'
import {Link} from '@reach/router'
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';

function Arrow() {
    return (
        <>
            <Link className="carousel-control-prev" to="#main_slider" role="button" data-slide="prev"> <i> <FaAngleLeft /> </i></Link>
            <Link className="carousel-control-next" to="#main_slider" role="button" data-slide="next"> <i> <FaAngleRight /> </i></Link>
        </>
    )
}

export default Arrow
