import React from 'react'
import Navbar from './Navbar'
import Sidebar from './profileSidebar'
import {Outlet} from 'react-router-dom'

const accountLayout = () => {
  return (
    <>
    <div><Navbar/></div>
    <div className='flex'><Sidebar/><Outlet/></div>
      
    </>
  )
}

export default accountLayout
