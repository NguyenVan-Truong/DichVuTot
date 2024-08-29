import React, { useState } from 'react';
import Slider from 'react-slick';
import banner from '../../assets/Images/banner3.png';
import banner1 from '../../assets/Images/banner4.png';
import banner2 from '../../assets/Images/banner1.png';
import '../Banner/Baner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomPrevArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void; hidden?: boolean }> = (props) => (
    <div
        className={`custom-arrow custom-prev ${props.className}`}
        onClick={props.onClick}
        style={{ ...props.style, display: props.hidden ? 'none' : 'block' }}
    >
        <FaChevronLeft style={{ color: 'black', fontSize: '30px' }} />
    </div>
);

const CustomNextArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void; hidden?: boolean }> = (props) => (
    <div
        className={`custom-arrow custom-next ${props.className}`}
        onClick={props.onClick}
        style={{ ...props.style, display: props.hidden ? 'none' : 'block' }}
    >
        <FaChevronRight style={{ color: 'black', fontSize: '30px' }} />
    </div>
);

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2; // Total number of slides

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow hidden={currentSlide === 0} />,
        nextArrow: <CustomNextArrow hidden={currentSlide === totalSlides - 1} />,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };

    return (
        <div className='banner'>
            <Slider {...settings} className='banner-left'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner2} alt="" />
                </div>
                <div>
                    <img src={banner1} alt="" />
                </div>

            </Slider>
            <div className='banner-right'>
                <img src={banner} alt="" />
                <img src={banner1} alt="" />
            </div>
        </div>
    );
}

export default Banner;