import React, { Component } from 'react'
import '../../assets/styles/style.css'



//custom components
import Header from '../../components/header';
import AboutArea from '../../components/about';
import BlogCom from '../../components/Blog-com';
import CasinoSlider from '../../components/casinoSlider';
import Booktable from '../../components/bookTable'
import Clients from '../../components/Clients';
import Footer from '../../components/footer';


export class HomePage extends Component {
    render() {
        return (
            <div className="main-layout">
                <Header />
                {/* header end  */}
                {/* about section  */}
                <AboutArea />
                {/* end abouts  */}
                {/* our how_it */}
                <BlogCom />
                {/* end how_it  */}
                {/* We are  */}
                <CasinoSlider />
                {/* end We are  */}
                {/* contact start  */}
                <Booktable />
                {/* contact end  */}
                {/* clients  */}
                <Clients />
                {/* clients end  */}
                {/* footer  */}
                <Footer />
                {/* footer end  */}
            </div>
        )
    }
}

export default HomePage
