import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Menu } from './Menu/menu'
import { Pablo } from './PasswordManager/Pablo'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route link="/" element={<><Menu/><Home/></>}/>
        <Route link="/p" element={<><Menu/><Pablo/></>}/>
    </Routes>
  )
}
