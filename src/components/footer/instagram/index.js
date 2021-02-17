import React from 'react'
import Instagram1 from '../../../assets/images/f1.jpg';
import Instagram2 from '../../../assets/images/f2.jpg';
import Instagram3 from '../../../assets/images/f3.jpg';
import Instagram4 from '../../../assets/images/f4.jpg';
import Instagram5 from '../../../assets/images/f1.jpg';
import Instagram6 from '../../../assets/images/f3.jpg';

function Instagram() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="address">
                <h3>instagram </h3>
                <div className="row">
                    <div className="col-md-4 col-sm-4 pa_right hhh">
                        <div className="insta_img">
                            <figure><img src={Instagram1} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 pa_right hhh">
                        <div className="insta_img">
                            <figure><img src={Instagram2} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 pa_right hhh">
                        <div className="insta_img">
                            <figure><img src={Instagram3} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 pa_right">
                        <div className="insta_img">
                            <figure><img src={Instagram4} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 pa_right">
                        <div className="insta_img">
                            <figure><img src={Instagram5} alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 pa_right">
                        <div className="insta_img">
                            <figure><img src={Instagram6} alt="#" /></figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Instagram
