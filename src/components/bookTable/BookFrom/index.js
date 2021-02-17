import React from 'react'

function FormBook() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="contact">
                <form>
                    <div className="row">
                        <div className="col-sm-12">
                            <input className="contactus" placeholder="Name" type="text" name="Name" />
                        </div>
                        <div className="col-sm-12">
                            <input className="contactus" placeholder="Phone" type="text" name="Email" />
                        </div>
                        <div className="col-sm-12">
                            <input className="contactus" placeholder="Email" type="text" name="Email" />
                        </div>
                        <div className="col-sm-12">
                            <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                        </div>
                        <div className="col-sm-12">
                            <button className="send">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormBook
