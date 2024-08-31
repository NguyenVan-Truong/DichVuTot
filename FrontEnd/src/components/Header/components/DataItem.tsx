import { FaMobileAlt } from 'react-icons/fa';

// Định nghĩa biểu tượng để sử dụng cho các mục
const image_laptop = <FaMobileAlt style={{ fontSize: '24px', color: 'white' }} />;

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
        ],
    },
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
        ],
    },
    // Các mục khác, nếu cần
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
        ],
    },
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
    },
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
    },
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
    },
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
    },
    {
        imageSrc: image_laptop,
        text: 'Sửa chữa laptop',
    },
];

export { navItems };
