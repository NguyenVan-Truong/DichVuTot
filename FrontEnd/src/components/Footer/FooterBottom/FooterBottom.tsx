import React from 'react'
import './footerBottom.scss'
import hacom from '../../../assets/Images/hacom.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTiktok, FaYoutube } from 'react-icons/fa'
import { MdAccessTime, MdPhone } from 'react-icons/md'
import { AspectRatio } from '@mantine/core'
const FooterBottom = () => {
    const latitude = 21.01117345621173;
    const longitude = 105.82154762447361;
    return (
        <>
            <div className='footerBottom'>
                <div className='footerBottomOne'>
                    <span style={{ backgroundColor: 'red', padding: '6px', color: 'white' }}><span className='FooterTittle'>1</span><span style={{ fontSize: '25px' }}>dichvutot-65 THÁI HÀ</span></span>
                    <div className='footerContent'>
                        <span><FaMapMarkerAlt /><strong>Địa chỉ : </strong>Số 65 Phố Thái Hà - Đống Đa - Hà Nội</span>
                        <span><MdPhone /><strong>Bảo Hành : </strong>1800 8091</span>
                        <span><MdPhone /><strong>Khiếu Nại Dịch Vụ: </strong>1800 8091</span>
                        <span><MdAccessTime /><strong>Mở cửa từ: </strong>8h30 - 19h hàng ngày</span>
                    </div>
                </div>
                <div className='footerBottomOne'>
                    <span style={{ backgroundColor: 'red', padding: '6px', color: 'white' }}><span className='FooterTittle'>2</span><span style={{ fontSize: '25px' }}>dichvutot-65 THÁI HÀ</span></span>
                    <div className='footerContent'>
                        <span><FaMapMarkerAlt /><strong>Địa chỉ : </strong>Số 65 Phố Thái Hà - Đống Đa - Hà Nội</span>
                        <span><MdPhone /><strong>Bảo Hành : </strong>1800 8091</span>
                        <span><MdPhone /><strong>Khiếu Nại Dịch Vụ: </strong>1800 8091</span>
                        <span><MdAccessTime /><strong>Mở cửa từ: </strong>8h30 - 19h hàng ngày</span>
                    </div>
                </div>
                <div className='footerBottomOne'>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px', marginBottom: '15px', display: 'flex', alignItems: 'center', padding: '5px' }}>Kết nối với dichvutot.vn</span>
                    <div className='icon'>
                        <FaYoutube style={{ fontSize: '30px', color: 'red' }} title="YouTube" />
                        <FaFacebook style={{ fontSize: '30px', color: '#3b5998' }} title="Facebook" />
                        <FaInstagram style={{ fontSize: '30px', color: '#C13584' }} title="Instagram" />
                        <FaTiktok style={{ fontSize: '30px', color: '#010101' }} title="TikTok" />
                    </div>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Thành viên của HACOM GROUP</p>
                    <img src={hacom} alt="" width={150} />
                </div>
                <div>
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                            style={{ border: 0 }}
                        />
                    </AspectRatio>
                </div>
            </div>
        </>
    )
}

export default FooterBottom