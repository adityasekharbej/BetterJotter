import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Menu } from '../components/Menu/menu'

import { Create } from '../components/PasswordManager/Create'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<><Menu/><Home/></>}/>
        <Route path="/create" element={<><Menu/><Create/></>}/>
    </Routes>
  )
}
