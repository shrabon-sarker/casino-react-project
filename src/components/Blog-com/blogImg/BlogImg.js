import React from 'react'
import Blog from '../../../assets/images/blog-image.jpg'

function BlogImg() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-12 p-0 col-sm-12 padding-right1">
            <div className="two-box">
                <figure><img className='img-fluid' src={Blog} alt="#" /></figure>
            </div>
        </div>
    )
}

export default BlogImg
