
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import "./Header.scss";
import { Dropdown, Menu } from 'antd';
import logo from "../../assets/Images/logo.jpg";
import { navItems } from "./components/DataItem";
import { Button, Input } from "@mantine/core";
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleMenuToggle = () => {
        setIsMenuMobileOpen(!isMenuMobileOpen);
    };
    // console.log("isMenuMobileOpen", isMenuMobileOpen);
    return (
        <>
            <header className="">
                <div className="container">
                    <div className="header__top">
                        <div className="header__menuMobile" onClick={handleMenuToggle}>
                            <span>
                                <IoMdMenu className="header__menuMoblie-icon" />
                            </span>
                        </div>
                        <div className="header__logo">
                            <img src={logo} alt="" className="" />
                        </div>
                        <div className="header_actions">
                            {/* danh mục */}
                            <div className="header__menu">
                                <Button className="header__menu-Button" onClick={toggleMenu}>
                                    <IoMdMenu className="header__menu-icon" />
                                    Danh mục
                                </Button>
                            </div>
                            {/* form seach */}
                            <form className="form">
                                <Input className='input' placeholder="Nhập tên sản phẩm, từ khoá cần tìm" />
                                <Button className='search'>
                                    <FaSearch style={{ fontSize: '15px', color: 'white' }} />
                                </Button>
                            </form>
                            {/* button-giỏ hàng */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <div className="header__cart">
                                    <Button className="header__cart-button"><FaShoppingCart className="header__cart-icon" />Giỏ hàng</Button>
                                </div>
                            </Dropdown>
                            {/*button-đăng nhập */}
                            <div className="header__user">
                                <Button className="header__user-button"> <FaUser className="header__user-icon" />Đăng nhập</Button>
                            </div>
                        </div>
                    </div>

                    <div className="header__center">
                        {/* form tìm kiếm online */}
                        <div className="header__inputSeach">
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
                                    className=""
                                />
                                <Button>
                                    <CiSearch className="header__inputSeach-icon" />
                                </Button>
                            </form>
                        </div>
                        {/* end form tìm kiếm online */}

                        {/*Start nav deskop */}
                        <div
                            className={`header__nav ${isMenuMobileOpen == true ? "show" : "hide"}`}
                        >
                            {navItems.map((item: any, index: number) => (
                                <div className="header__nav-item" key={index}>
                                    <div className="header__nav-item_name">
                                        {item.imageSrc}
                                        <p>{item.text}</p>
                                    </div>
                                    {item.subMenu && (
                                        <div className="item__subMenu">
                                            {item.subMenu.map((subItem: any, subIndex: any) => (
                                                <div className="item__subMenu-one" key={subIndex}>
                                                    <h2>{subItem.title}</h2>
                                                    <ul>
                                                        {subItem.links.map((link: any, linkIndex: any) => (
                                                            <li key={linkIndex}>
                                                                <a href={link.href}>{link.text}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            <div className="item__subMenu-image">
                                                {/* <img src={nav_image_shadow} alt="Submenu Shadow" /> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/*End nav deskop */}
                        {/* subMenuMobile */}
                        <div
                            className={`sub__menu_mobile ${isMenuMobileOpen == true ? "show" : "hide"}`}
                        >
                            <h3>Sửa chữa Laptop</h3>
                            <Button >Sửa Main Laptop</Button >
                            <Button >Sửa Main Laptop</Button >
                            <Button >Sửa Main Laptop</Button >
                            <Button >Sửa Main Laptop</Button >
                        </div>
                        {/* endsubMobile */}
                    </div>
                </div>
            </header>
            {/* Overlay background */}
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Header;