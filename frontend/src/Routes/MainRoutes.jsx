import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Menu } from '../components/Menu/menu'
import { Pablo } from '../components/PasswordManager/Pablo'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<><Menu/><Home/></>}/>
        <Route path="/p" element={<><Menu/><Pablo/></>}/>
    </Routes>
  )
}
