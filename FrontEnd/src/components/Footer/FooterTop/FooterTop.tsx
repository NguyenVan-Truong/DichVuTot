import React from 'react'
import master from '../../../assets/Images/master.png'
import visa from '../../../assets/Images/visa.png'
import vnpay from '../../../assets/Images/vnpay.png'
import atm from '../../../assets/Images/atm.png'
import './FooterTop.scss'
const FooterTop = () => {
    return (
        <>
            <div className='footer'>
                <div>
                    <p>THÔNG TIN CÔNG TY</p>
                    <span>Giới thiếu công ty</span>
                    <span>Tin tức công nghệ</span>
                    <span>Thông tin liên hệ </span>
                </div>
                <div>
                    <p>HỖ TRỢ KHÁCH HÀNG</p>
                    <span>Hướng dẫn đặt lịch</span>
                    <span>Chính sách trả gớp</span>
                    <span>Yêu cầu báo giá </span>
                </div>
                <div>
                    <p>CHÍNH SÁCH CHUNG</p>
                    <span>Chính sách bảo mật</span>
                    <span>Chính sách bảo hành</span>
                    <span>Thông tin vận chuyển</span>
                </div>
                <div>
                    <p>THÔNG TIN KHÁC</p>
                    <span>Tổng đài hỗ trợ miễn phí</span>
                    <span>(Gớp ý - Sửa chữa - Bảo hành)</span>
                    <span>1800 8091 (8:30 - 19:00)</span>
                    <span>Email: info@dichvutot.vn</span>
                </div>
                <div>
                    <p>PHƯƠNG THỨC THANH TOÁN</p>
                    <div className='image-cart'>
                        <div className='imageone'>
                            <img src={master} alt="" />
                        </div>
                        <div className='imageone'>
                            <img src={visa} alt="" />
                        </div>
                        <div className='imageone'>
                            <img src={vnpay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTop