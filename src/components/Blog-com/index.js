import React from 'react'
import BlogImg from './blogImg/BlogImg'
import BlogText from './blogText/BlogText'

function BlogCom() {
    return (
        <div id="blog" className="how_it">
            <div className="container-fluid paddimg_ouu">
                <div className="row">
                    <BlogImg />
                    <BlogText />
                </div>
            </div>
        </div>
    )
}

export default BlogCom
