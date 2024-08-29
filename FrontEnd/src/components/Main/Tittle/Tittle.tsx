import React from 'react'
import './Title.scss'
import { Button } from '@mantine/core'
const Tittle = () => {
    return (
        <>
            <div className='title'>
                <div className='title-one'>
                    <div className='triangle'></div>
                    Sửa Chữa LapTop</div>
                <div className='title-two'>
                    <Button>Sửa Auddio LapTop</Button>
                    <Button>Sửa Bản Lề LapTop</Button>
                    <Button>Sửa Màn Hình LapTop</Button>
                    <Button>Sửa Wifi LapTop</Button>
                    <Button>Sửa Nguồn LapTop</Button>
                    <Button>Xem Tất cả</Button>
                </div>
            </div>
        </>
    )
}

export default Tittle