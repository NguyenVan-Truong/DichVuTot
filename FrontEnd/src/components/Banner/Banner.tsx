import React from 'react';
import Slider from 'react-slick';
import banner from '../../assets/Images/banner3.png';
import banner1 from '../../assets/Images/banner4.png';
import '../Banner/Baner.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


// Component cho nút điều hướng tùy chỉnh
const CustomPrevArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void; }> = (props) => (
    <div
        className={props.className}
        onClick={props.onClick}
    >
        <FaChevronLeft style={{ color: 'black', fontSize: '30px' }} />
    </div>
);

const CustomNextArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void; }> = (props) => (
    <div
        className={props.className}
        onClick={props.onClick}
    >
        <FaChevronRight style={{ color: 'black', fontSize: '30px' }} />
    </div>
);

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className='banner'>
            <Slider {...settings} className='banner-left'>
                <div>
                    <img src={banner} alt="" width={900} />
                </div>
                <div>
                    <img src={banner1} alt="" width={900} />
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
