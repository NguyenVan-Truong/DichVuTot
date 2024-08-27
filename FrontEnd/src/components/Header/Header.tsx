import './Header.scss'
import logo from '../../assets/Images/logo.jpg'
import dropdownContent from '../../assets/Images/dropdown1.png'
import { FaBars, FaCogs, FaDesktop, FaMobileAlt, FaRegNewspaper, FaSearch, FaShieldAlt, FaShoppingCart, FaTools, FaUser, FaWrench } from 'react-icons/fa'
import { MdBuild } from 'react-icons/md';
import { Dropdown, Menu } from 'antd';
const Header = () => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div className='cart-dropdown'>
                    <h3>Giỏ hàng của bạn</h3>

                </div>
            </Menu.Item>
            {/* <Menu.Item key="1">
                <img src={dropdownContent} alt="" width={300} style={{ padding: '15px', borderRadius: '40px' }} />
            </Menu.Item> */}
        </Menu>
    );
    return (
        <div className='header'>
            <div className='header-top'>
                <img src={logo} alt="" />
                <span className='category'><FaBars style={{ fontSize: '20px', color: 'white' }} />Danh mục</span>
                <form action="">
                    <input type="text" placeholder='Nhập tên sản phẩm , từ khoá cần tìm ' />
                    <button className='search'>
                        <FaSearch style={{ fontSize: '15px', color: 'white' }} />
                    </button>
                </form>
                {/* <span className='cart'><FaShoppingCart style={{ fontSize: '15px', color: 'white' }} /> Giỏ hàng</span> */}
                <Dropdown overlay={menu} trigger={['click']}>
                    <span className='cart'>
                        <FaShoppingCart style={{ fontSize: '15px', color: 'white' }} /> Giỏ hàng
                    </span>
                </Dropdown>
                <span className='user'><FaUser style={{ fontSize: '15px', color: 'white' }} />Đăng nhập</span>
            </div>
            <div className='header-bottom'>
                <div className='icon-header'>
                    <div className='icon-header-menu'>
                        <FaDesktop style={{ fontSize: '24px', color: 'white' }} />
                        <span>SỬA CHỮA LAPTOP</span>
                    </div>
                    <div className='dropdown-content'>
                        <div style={{ display: 'flex' }}>
                            <div className='content-one'>
                                <h1>Sửa Main-Nguồn - Wifi</h1>
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
                                <h1>Sửa Main-Nguồn - Wifi</h1>
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
                                <h1>Sửa Main-Nguồn - Wifi</h1>
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
                </div>
                <div className='icon-header'>
                    <div className='icon-header-menu'>
                        <FaMobileAlt style={{ fontSize: '24px', color: 'white' }} />
                        <span>SỬA CHỮA ĐIỆN THOẠI</span>
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
        </div>

    )
}

export default Header