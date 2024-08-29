import { FaDesktop, FaMobileAlt, FaTools, FaCogs, FaWrench, FaShieldAlt, FaRegNewspaper } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import './HeaderBottom.scss';
import Dropdown from '../Dropdown/Dropdown';

const HeaderBottom = () => {
    return (
        <div className='header-bottom'>
            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaDesktop style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA LAPTOP</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-10px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaMobileAlt style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA ĐIỆN THOẠI</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-185px', }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaTools style={{ fontSize: '24px', color: 'white' }} />
                    <span>SỬA CHỮA LINH KIỆN</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-360px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaCogs style={{ fontSize: '24px', color: 'white' }} />
                    <span>THAY THẾ LINH KIỆN</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-535px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaWrench style={{ fontSize: '24px', color: 'white' }} />
                    <span>THIẾT BỊ VĂN PHÒNG</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-710px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <MdBuild style={{ fontSize: '24px', color: 'white' }} />
                    <span>BẢO TRÌ BẢO DƯỠNG</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-885px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaShieldAlt style={{ fontSize: '24px', color: 'white' }} />
                    <span>BẢO HÀNH MỞ RỘNG</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-1060px' }}>
                    <Dropdown />
                </div>
            </div>

            <div className='icon-header'>
                <div className='icon-header-menu'>
                    <FaRegNewspaper style={{ fontSize: '24px', color: 'white' }} />
                    <span>TIN CÔNG NGHỆ</span>
                </div>
                <div className='dropdown-content' style={{ top: '100%', left: '-1235px' }}>
                    <Dropdown />
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
