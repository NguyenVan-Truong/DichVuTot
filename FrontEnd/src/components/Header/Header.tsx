import './Header.scss'
import logo from '../../assets/Images/logo.jpg'
import { FaBars, FaCogs, FaDesktop, FaMobileAlt, FaRegNewspaper, FaSearch, FaShieldAlt, FaShoppingCart, FaTools, FaUser, FaWrench } from 'react-icons/fa'
import { Dropdown, Input, Menu } from 'antd';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import { Button } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
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
                <Button className='button' leftSection={<IconMenu2 size={22} />} variant="filled" size="xs" radius="md">Danh Mục</Button>
                <form className="form">
                    <Input className='input' placeholder="Nhập tên sản phẩm, từ khoá cần tìm" />
                    <Button className='search'>
                        <FaSearch style={{ fontSize: '15px', color: 'white' }} />
                    </Button>
                </form>

                {/* <span className='cart'><FaShoppingCart style={{ fontSize: '15px', color: 'white' }} /> Giỏ hàng</span> */}
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button className='button' variant="filled" size="xs" radius="md" leftSection={<FaShoppingCart size={20} />} >
                        Giỏ hàng
                    </Button>
                </Dropdown>
                <Button style={{ backgroundColor: '#2D2C74', fontWeight: 'bold' }} variant="filled" size="xs" radius="md" leftSection={<FaUser size={15} />}>
                    Đăng Nhập
                </Button>

            </div>
            <HeaderBottom />
        </div>
    )
}

export default Header