import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, navbar = true }) => {
  return (
    <>
      <div className='w-screen max-w-screen min-h-screen bg-accent flex text-white'>
        {navbar && <Navbar />}
        {children}
        {/* <div className='w-4/5  Lexend'>
        <div className='w-full p-5 border-b border-textGray text-2xl font-semibold'>Dashboard</div>
        <div>{childern}</div>
      </div> */}
      </div>
    </>
  )
}

export default Layout