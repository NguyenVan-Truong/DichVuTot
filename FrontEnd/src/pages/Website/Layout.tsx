
import { Outlet } from 'react-router-dom'
import './layout.scss'
import Header from '../../components/Header/Header'
import mess from './../../assets/Images/mess.jpg'
import zalo from './../../assets/Images/zalo.png'
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa'
const Layout = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <div className='footerchart'>
                <div className='date'>
                    <FaCalendarAlt style={{ color: 'white', fontSize: '24px' }} />
                    <span>Ngày tháng</span>
                </div>
                <div className='face'>
                    <img src={mess} alt="" />
                    <div className='facechat'>
                        <span className='facetext'>Chat Facebook</span>
                        <span>(8h30-19h)</span>
                    </div>
                </div>
                <div className='mess'>
                    <img src={zalo} alt="" />
                    <div className='messchat'>
                        <span className='messtext'>Chat Zalo</span>
                        <span>(8h30-19h)</span>
                    </div>
                </div>
                <div className='telephone'>
                    <FaPhoneAlt style={{ color: 'red', fontSize: '40px' }} />
                    <div className='telechat'>
                        <span className='teletext'>1900 1903</span>
                        <span>(8h30-19h)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
