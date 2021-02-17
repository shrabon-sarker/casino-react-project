import React from 'react'
import {Link} from '@reach/router'

function CopyRight() {
    return (
        <div className="copyright">
            <div className="container">
                <p>© 2019 All Rights Reserved. <Link to="https://html.design/">Free html Templates</Link></p>
            </div>
        </div>
    )
}

export default CopyRight
