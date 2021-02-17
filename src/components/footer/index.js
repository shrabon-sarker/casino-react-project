import React from 'react'
import Address from './address/Address'
import CopyRight from './copyright'
import Instagram from './instagram'
import FooterLink from './link'
import Location from './location/Location'
import MenuFooter from './menu/MenuFooter'

function Footer() {
    return (
        <footr>
            <div className="footer top_layer ">
                <div className="container">
                    <div className="row">
                        <Location />
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
                            <div className="row">
                                <MenuFooter />
                                <FooterLink />
                               <Instagram />
                            </div>
                        </div>
                        <Address />
                    </div>

                </div>
                <CopyRight />
            </div>
        </footr>
    )
}

export default Footer
