import React from 'react'
import dropdownContent from '../../../assets/Images/dropdown1.png'
import { FaDesktop, FaMobileAlt, FaTools, FaCogs, FaWrench, FaShieldAlt, FaRegNewspaper } from 'react-icons/fa'
import { MdBuild } from 'react-icons/md';
import './HeaderBottom.scss'

const Dropdown = ({ title, customClass, customClassOne }: any) => {
    return (
        <div className={`dropdown-content ${customClassOne} ${customClass}`}>
            <div style={{ display: 'flex' }}>
                <div className='content-one'>
                    <h1>{title}</h1>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Card Wifi SF313-53</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div className='content-one'>
                    <h1>{title}</h1>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Card Wifi SF313-53</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div className='content-one'>
                    <h1>{title}</h1>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Card Wifi SF313-53</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div className='content-one'>
                    <img src={dropdownContent} alt="" width={300} style={{ padding: '15px', borderRadius: '40px' }} />
                </div>
            </div>
        </div>
    );
};

const HeaderBottom = () => {
    return (
        <div className='header-bottom'>
            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaDesktop style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA LAPTOP</span>
                </div>
                <Dropdown title="Sửa Main-Nguồn - Wifi" />
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaMobileAlt style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA ĐIỆN THOẠI</span>
                </div>
                <div style={{ transform: 'translateX(-20px)' }}>
                    <Dropdown title="Sửa Main-Nguồn - Wifi" customClass="custom-dropdown" />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaTools style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA LINH KIỆN</span>
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaCogs style={{ fontSize: '24px', color: 'white' }} />
                    <span>THAY THẾ LINH KIỆN</span>
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaWrench style={{ fontSize: '24px', color: 'white' }} />
                    <span>THIẾT BỊ VĂN PHÒNG</span>
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <MdBuild style={{ fontSize: '24px', color: 'white' }} />
                    <span>BẢO TRÌ BẢO DƯỠNG</span>
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaShieldAlt style={{ fontSize: '24px', color: 'white' }} />
                    <span>BẢO HÀNH MỞ RỘNG</span>
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaRegNewspaper style={{ fontSize: '24px', color: 'white' }} />
                    <span>TIN CÔNG NGHỆ</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;
