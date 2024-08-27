import React from 'react'
import Banner from '../../../components/Banner/Banner'
import BannerSider from '../../../components/BannerSider/BannerSider'
import Tittle from '../../../components/Main/Tittle/Tittle'
import SliderMain from './../../../components/Main/Slider/Slider';
import TittleTwo from '../../../components/Main/Tittle/TitleTwo';
import SliderTwo from '../../../components/Main/Slider/SliderTwo';
import TittleBottom from '../../../components/Main/Tittle/TittleBottom';
import Bootom from '../../../components/Main/Bootom/Bootom';
import FooterTop from '../../../components/Footer/FooterTop/FooterTop';
import FooterBottom from '../../../components/Footer/FooterBottom/FooterBottom';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerSider />
            <Tittle />
            <SliderMain />
            <TittleTwo />
            <SliderTwo />
            <SliderTwo />
            <TittleTwo />
            <SliderMain />
            <SliderMain />
            <TittleBottom />
            <Bootom />
            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default Home
