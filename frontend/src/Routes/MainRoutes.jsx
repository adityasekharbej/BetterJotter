import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Menu } from '../components/Menu/menu'
import { Pablo } from '../components/PasswordManager/Pablo'
import { Navbar } from '../components/Navbar'

export const MainRoutes = () => {
  return (
    <>
    <Menu/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/p" element={<Pablo/>}/>
    </Routes>
    </>
  )
}
