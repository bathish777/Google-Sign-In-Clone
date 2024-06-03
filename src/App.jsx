import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmailPage from './component/EmailPage';
import Password from './component/Password'
import Home from './component/Home'
import './input.css'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* Define routes with correct path */}
                    <Route element={<EmailPage/>} path='/' />
                    <Route element={<Password />} path='/password' />
                    <Route element={<Home />} path='/home' />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
