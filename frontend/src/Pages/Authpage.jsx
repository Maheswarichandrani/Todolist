import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar1 from '../components/Navbar1'

function Authpage() {
  return (
   <>
    <Navbar1/>
    <div>
      <Outlet />
    </div>
   </>
  )
}

export default Authpage