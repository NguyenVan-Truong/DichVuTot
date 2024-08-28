import './Header.scss'
import logo from '../../assets/Images/logo.jpg'
import dropdownContent from '../../assets/Images/dropdown1.png'
import { FaBars, FaCogs, FaDesktop, FaMobileAlt, FaRegNewspaper, FaSearch, FaShieldAlt, FaShoppingCart, FaTools, FaUser, FaWrench } from 'react-icons/fa'
import { MdBuild } from 'react-icons/md';
import { Dropdown, Menu } from 'antd';
import HeaderBottom from './HeaderBottom/HeaderBottom';
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
            <HeaderBottom />
        </div>

    )
}

export default Header