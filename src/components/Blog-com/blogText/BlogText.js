import React from 'react'
import{Link} from '@reach/router'

function BlogText() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-12 p-0 col-sm-12 padding-left1">
            <div className="two-box_text">
                <div className="travel">
                    <h3>how it all started</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
                    <Link to="#">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogText
