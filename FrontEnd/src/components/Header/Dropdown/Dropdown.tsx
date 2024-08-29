
import './Dropdown.scss'
import anhDropdown from '../../../assets/Images/dropdown1.png'
import { Text } from '@mantine/core'
const Dropdown = () => {
    return (
        <>
            <div className='dropdown'>
                <div className='dropdown__COntent'>
                    <Text fw={500} size='xl' className='text'>Sửa Main - Nguồn - Wifi</Text>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div className='dropdown__COntent'>
                    <Text fw={500} size='xl' className='text'>Sửa Main - Nguồn - Wifi</Text>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div className='dropdown__COntent'>
                    <Text fw={500} size='xl' className='text'>Sửa Main - Nguồn - Wifi</Text>
                    <ul>
                        <li><a href="">Dịch vụ đổi bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop chuyên sâu: sửa chữa trên Main bị cháy nổ rỉ sét</a></li>
                        <li><a href="">Dịch vụ thay bo mạch chủ cho laptop</a></li>
                        <li><a href="">Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên Main</a></li>
                        <li><a href="">Sửa chữa laptop cơ bản: sửa chữa phần nguồn sơ cấp trên Main</a></li>
                        <li><a href="">Sửa card wifi laptop</a></li>
                    </ul>
                </div>
                <div >
                    <img src={anhDropdown} alt="" style={{ borderRadius: '10px' }} />
                </div>
            </div>
        </>
    )
}

export default Dropdown