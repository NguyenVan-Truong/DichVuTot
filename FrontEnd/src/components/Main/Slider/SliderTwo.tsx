// ItemCard.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sanpham1 from '../../../assets/Images/sanpham7.jpg';

const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    const [hover, setHover] = useState(false);
    return (
        <div
            className={className}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <FaChevronLeft style={{ color: hover ? 'white' : 'black', fontSize: '30px', marginLeft: '5px', marginTop: '20px' }} />
        </div>
    );
}

const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    const [hover, setHover] = useState(false);
    return (
        <div
            className={className}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <FaChevronRight style={{ color: hover ? 'white' : 'black', fontSize: '30px', marginLeft: '5px', marginTop: '20px' }} />
        </div>
    );
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const products = [
    {
        id: 1,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
    {
        id: 2,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
    {
        id: 3,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
    {
        id: 4,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
    {
        id: 5,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
    {
        id: 6,
        image: sanpham1,
        code: '123456',
        name: 'Bàn Phím Laptop Asus UX534 Bạc Led',
        oldPrice: '1.299.000₫',
        discount: '15%',
        newPrice: '1.099.000₫',
        availability: 'Đặt dịch vụ : 1800.8091',
    },
];

const SliderTwo: React.FC = () => {
    return (
        <div className='main'>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id}>
                        <div className='item'>
                            <img src={product.image} alt={product.name} width={135} style={{ marginLeft: '35px' }} />
                            <div className='itemStar'>
                                <div style={{ color: 'gold', fontSize: '12px' }}>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <div>
                                    Mã: {product.code}
                                </div>
                            </div>
                            <div className='description'>
                                <span>{product.name}</span>
                                <div>
                                    <span><s>{product.oldPrice}</s><span style={{ color: 'red', marginLeft: '4px' }}>(tiết kiệm {product.discount})</span></span>
                                </div>
                                <span className='price'>{product.newPrice}</span>
                                <span style={{ color: 'red' }}>
                                    {product.availability}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderTwo;
