import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Website/Layout'
import Home from '../pages/Website/Home/Home'


const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default Index