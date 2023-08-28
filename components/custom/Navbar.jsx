import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
    <div className='w-1/5 p-5 Lexend border-r border-textGray'>
      <div>
        <img className='h-20 w-20' src="/assets/logo.png" alt="" />
      </div>
      <div className='text-white grid grid-cols-1 gap-2'>
        {/* <NavItem link={{
          url: "/",
          title: "Home"
        }}/> */}
        <NavItem link={{
          url: "/restaurant",
          title: "Restaurant"
        }}/>
        <NavItem link={{
          url: "/customer",
          title: "Customer"
        }}/>
      </div>
    </div>
    </>
  )
}

export default Navbar