import React from 'react'
import './footerBottom.scss'
import hacom from '../../../assets/Images/hacom.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdAccessTime, MdPhone } from 'react-icons/md'
import { AspectRatio } from '@mantine/core'
const FooterBottom = () => {
    const latitude = 21.01117345621173;
    const longitude = 105.82154762447361;
    return (
        <>
            <div className='footerBottom'>
                <div className='footerBottomOne'>
                    <span className='titleFooter'><span className='titleTwo'>1</span>dichvutot-65 thái hà </span>
                    <div className='footerContent'>
                        <span className='footerContentOne'> <FaMapMarkerAlt className='icon' /><strong>Địa chỉ : </strong>Số 65 Phố Thái Hà - Đống Đa - Hà Nội</span>
                        <span className='footerContentOne'> <MdPhone className='icon' /><strong>Bảo Hành : </strong>1800 8091</span>
                        <span className='footerContentOne'> <MdPhone className='icon' /><strong>Khiếu Nại Dịch Vụ: </strong>1800 8091</span>
                        <span className='footerContentOne'> <MdAccessTime className='icon' /><strong>Mở cửa từ: </strong>8h30 - 19h hàng ngày</span>
                    </div>
                </div>
                <div className='footerBottomOne'>
                    <span className='titleFooter'><span className='titleTwo'>1</span>dichvutot-65 thái hà </span>
                    <div className='footerContent'>
                        <span className='footerContentOne'> <FaMapMarkerAlt className='icon' /><strong>Địa chỉ : </strong>Số 65 Phố Thái Hà - Đống Đa - Hà Nội</span>
                        <span className='footerContentOne'> <MdPhone className='icon' /><strong>Bảo Hành : </strong>1800 8091</span>
                        <span className='footerContentOne'> <MdPhone className='icon' /><strong>Khiếu Nại Dịch Vụ: </strong>1800 8091</span>
                        <span className='footerContentOne'> <MdAccessTime className='icon' /><strong>Mở cửa từ: </strong>8h30 - 19h hàng ngày</span>
                    </div>
                </div>
                <div className='footerBottomOne'>
                    <span className='titleThree' >Kết nối với dichvutot.vn</span>
                    <div className='icon__Two'>
                        <FaYoutube style={{ fontSize: '30px', color: 'red' }} title="YouTube" />
                        <FaFacebook style={{ fontSize: '30px', color: '#3b5998' }} title="Facebook" />
                        <FaInstagram style={{ fontSize: '30px', color: '#C13584' }} title="Instagram" />
                        <FaTiktok style={{ fontSize: '30px', color: '#010101' }} title="TikTok" />
                        <FaTwitter style={{ fontSize: '30px', color: '#00acee' }} title="Twitter" />
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: '17px' }}>Thành viên của HACOM GROUP</span>
                    <img src={hacom} alt="" width={120} />
                </div>
                <div>
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                            className='map'
                        // tabindex="-1
                        />
                    </AspectRatio>
                </div>
            </div>
        </>
    )
}

export default FooterBottom