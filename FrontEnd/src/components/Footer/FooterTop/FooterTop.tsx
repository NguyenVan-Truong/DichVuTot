import React from 'react'
import master from '../../../assets/Images/master.png'
import visa from '../../../assets/Images/visa.png'
import vnpay from '../../../assets/Images/vnpay.png'
import './FooterTop.scss'
const FooterTop = () => {
    return (
        <>
            <div className='footer'>
                <div>
                    <h3>THÔNG TIN CÔNG TY</h3>
                    <p>Giới thiếu công ty</p>
                    <p>Tin tức công nghệ</p>
                    <p>Thông tin liên hệ </p>
                </div>
                <div>
                    <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                    <p>Hướng dẫn đặt lịch</p>
                    <p>Chính sách trả gớp</p>
                    <p>Yêu cầu báo giá </p>
                </div>
                <div>
                    <h3>CHÍNH SÁCH CHUNG</h3>
                    <p>Chính sách bảo mật</p>
                    <p>Chính sách bảo hành</p>
                    <p>Thông tin vận chuyển</p>
                </div>
                <div>
                    <h3>THÔNG TIN KHÁC</h3>
                    <p>Tổng đài hỗ trợ miễn phí</p>
                    <p>(Gớp ý - Sửa chữa - Bảo hành)</p>
                    <p>1800 8091 (8:30 - 19:00)</p>
                    <p>Email: info@dichvutot.vn</p>
                </div>
                <div>
                    <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                    <div className='image-cart'>
                        <img src={master} alt="" width={150} />
                        <div><img src={visa} alt="" width={100} /></div>
                        <img src={vnpay} alt="" width={150} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTop