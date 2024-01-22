import React from 'react'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <AppNav/>
        <Outlet/>
        <footer>this is footer section!!!</footer>
    </div>
  )
}

export default Layout