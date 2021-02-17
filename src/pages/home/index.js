import React, { Component } from 'react'
import '../../assets/styles/style.css'

import Logo from '../../assets/images/logo.png';
import Tas from '../../assets/images/img.png';
import Blog from '../../assets/images/blog-image.jpg';
import BinnerCasino from '../../assets/images/banner.png';
import CacInput from '../../assets/images/cac.png';
import Cli from '../../assets/images/cli.jpg';
import SeachIcon from '../../assets/images/search_icon.png';
import One from '../../assets/icon/1.png';
import Tow from '../../assets/icon/2.png';
import Three from '../../assets/icon/3.png';
import Instagram1 from '../../assets/images/f1.jpg';
import Instagram2 from '../../assets/images/f2.jpg';
import Instagram3 from '../../assets/images/f3.jpg';
import Instagram4 from '../../assets/images/f4.jpg';
import Instagram5 from '../../assets/images/f1.jpg';
import Instagram6 from '../../assets/images/f3.jpg';





export class HomePage extends Component {
    render() {
        return (
            <div className="main-layout">
                <header>
                {/* header inner  */}
                <div className="header-top">
                    <div className="header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html"><img src={Logo} alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu">
                                                <ul className="menu-area-main">
                                                    <li className="active"> <a href="index.html">Home</a> </li>
                                                    <li> <a href="#about">About</a> </li>
                                                    <li> <a href="#casino">Casino</a> </li>
                                                    <li> <a href="#testimonial">Testimonial</a> </li>
                                                    <li> <a href="#booktable">Book Table</a> </li>
                                                    <li className="mean-last">
                                                        <a href="#"><img src={SeachIcon} alt="#" /></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end header inner  */}

                    {/* end header  */}
                    <section className="slider_section">
                        <div className="banner_main">

                            <div className="container">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                        <div className="text-bg">
                                            <h1>Welcome to  <br /> <strong className="b_bold">Our casino </strong></h1>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</span>
                                            <a href="#">Contact Us</a> <a href="#">Book Online</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-img">
                                            <figure><img className="img-fluid" src={Tas} akt='resposive' /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>     
            </header>
            {/* header end  */}
            {/* about section  */}
            <div id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                            <div className="about-box">
                                <h3> ABOUT US</h3>
                                <span>all games here</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lettersdistracted by the readable distracted by the readable , a</p>
                                <a href="#">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end abouts  */}
            {/* our how_it */}
            <div id="blog" className="how_it">
                <div className="container-fluid paddimg_ouu">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 p-0 col-sm-12 padding-right1">
                            <div className="two-box">
                                <figure><img className='img-fluid' src={Blog} alt="#" /></figure>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 p-0 col-sm-12 padding-left1">
                            <div className="two-box_text">
                                <div className="travel">
                                    <h3>how it all started</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end how_it  */}
            {/* We are  */}
            <div id="casino" className="We_are">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>casino</h2>
                                <span>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="first-slide" src={BinnerCasino} alt="First slide" />
                                        <div className="container">
                                            <div className="carousel-caption relative">
                                                <p>Chips Gambling Card Game Casino Chips Gamble</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="second-slide" src={BinnerCasino} alt="Second slide" />
                                        <div className="container">
                                            <div className="carousel-caption relative">
                                                <p>Chips Gambling Card Game Casino Chips Gamble</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="third-slide" src={BinnerCasino} alt="Third slide" />
                                        <div className="container">
                                            <div className="carousel-caption relative">
                                                <p>Chips Gambling Card Game Casino Chips Gamble</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev"> <i className='fa fa-angle-left'></i></a>
                                <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next"> <i className='fa fa-angle-right'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end We are  */}
            {/* contact start  */}
            <div id="booktable" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h3>Book Table Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className="white_bg">
                        <div className="row">

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
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="rable-box">
                                    <figure><img src={CacInput} alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact end  */}
            {/* clients  */}
            <div id="testimonial" className="clients top_layer2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>clients says</h2>
                            </div>
                        </div>
                    </div>
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

                </div>
            </div>
            {/* clients end  */}
            {/* footer  */}
            <footr>
                <div className="footer top_layer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="location_section">
                                    <ul className="loca">
                                        <li>
                                            <a href="#"><img src={One} alt="#" /></a>demo@gmail.com </li>
                                        <li>
                                            <a href="#"><img src={Tow} alt="#" /></a>(+71 1234567890) </li>
                                        <li>
                                            <a href="#"><img src={Three} alt="#" /></a>Location </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="address">
                                            <h3>Menu</h3>
                                            <ul className="Menu_footer">
                                                <li className="active"> <a href="index.html">Home</a> </li>
                                                <li> <a href="#">About</a> </li>
                                                <li> <a href="#">Casino</a> </li>
                                                <li> <a href="#"> Testimonial</a> </li>
                                                <li> <a href="#">Contact us</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="address">
                                            <h3>Links</h3>
                                            <ul className="Links_footer">
                                                <li className="active"> <a href="index.html">Lorem Ipsum </a> </li>
                                                <li> <a href="#">Simply random</a> </li>
                                                <li> <a href="#">Roots in a</a> </li>
                                                <li> <a href="#"> Piece</a> </li>
                                                <li> <a href="#">classNameical</a> </li>
                                            </ul>
                                        </div>
                                    </div>

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
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="address">
                                    <h3>Subscribe to casino </h3>
                                    <p>eniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo</p>
                                    <input className="form-control" placeholder="Enter your email" type="type" name="Enter your email" />
                                    <button className="submit-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="copyright">
                        <div className="container">
                            <p>© 2019 All Rights Reserved. <a href="https://html.design/">Free html Templates</a></p>
                        </div>
                    </div>
                </div>
            </footr>
            {/* footer end  */}
            

            
        </div>
        )
    }
}

export default HomePage
