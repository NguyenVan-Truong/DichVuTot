import { FaBriefcase, FaExchangeAlt, FaLaptop, FaMobileAlt, FaNewspaper, FaShieldAlt, FaTools, FaWrench } from 'react-icons/fa';

// Định nghĩa biểu tượng để sử dụng cho các mục
const image_laptop = <FaMobileAlt style={{ fontSize: '24px', color: 'white' }} />;
const laptopIcon = <FaLaptop style={{ fontSize: '24px', color: 'white' }} />;
const repairIcon = <FaTools style={{ fontSize: '24px', color: 'white' }} />;
const replaceIcon = <FaExchangeAlt style={{ fontSize: '24px', color: 'white' }} />;
const officeEquipmentIcon = <FaBriefcase style={{ fontSize: '24px', color: 'white' }} />;
const maintenanceIcon = <FaWrench style={{ fontSize: '24px', color: 'white' }} />;
const warrantyIcon = <FaShieldAlt style={{ fontSize: '24px', color: 'white' }} />;
const techNewsIcon = <FaNewspaper style={{ fontSize: '24px', color: 'white' }} />;
const navItems = [
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: 'Sửa Main - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: laptopIcon,
        text: 'Sửa Chữa Điện Thoại',
        subMenu: [
            {
                title: 'Sửa Main - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    // Các mục khác, nếu cần
    {
        imageSrc: repairIcon,
        text: 'Sửa  laptop',
        subMenu: [
            {
                title: 'Sửa Main - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: replaceIcon,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: 'Sửa Main - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: officeEquipmentIcon,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: ' Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: maintenanceIcon,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: 'Sửa - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình ',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì ',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: warrantyIcon,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: 'Sửa Main - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: ' - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
    {
        imageSrc: techNewsIcon,
        text: 'Sửa chữa laptop',
        subMenu: [
            {
                title: ' - Nguồn - Wifi',
                links: [
                    { text: 'Dịch vụ bo chủ cho laptop', href: '#' },
                    { text: 'Thay bàn phím laptop', href: '#' },
                    { text: 'Thay ổ cứng laptop', href: '#' },
                    { text: 'Nâng cấp RAM cho laptop', href: '#' },
                ],
            },
            {
                title: 'Thay màn hình - Pin',
                links: [
                    { text: 'Thay màn hình laptop', href: '#' },
                    { text: 'Thay pin laptop', href: '#' },
                    { text: 'Sửa màn hình cảm ứng', href: '#' },
                    { text: 'Thay kính màn hình', href: '#' },
                ],
            },
            {
                title: 'Bảo trì - Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
            {
                title: 'Vệ sinh',
                links: [
                    { text: 'Bảo trì định kỳ laptop', href: '#' },
                    { text: 'Vệ sinh laptop', href: '#' },
                    { text: 'Thay keo tản nhiệt', href: '#' },
                    { text: 'Kiểm tra lỗi phần cứng', href: '#' },
                ],
            },
        ],
    },
];

export { navItems };
