import React from 'react'
import Navbar from './Navbar'
import { SubscriptionContextProvider } from '../context/Subscriptions'

const Layout = ({ children, navbar = true }) => {
  return (
    <>
      <SubscriptionContextProvider>
        <div className={'Lexend w-screen max-w-screen min-h-screen h-screen max-h-screen bg-accent flex text-white '}>
          {navbar && <Navbar />}
          {children}
          {/* <div className='w-4/5  Lexend'>
        <div className='w-full p-5 border-b border-textGray text-2xl font-semibold'>Dashboard</div>
        <div>{childern}</div>
      </div> */}
        </div>
      </SubscriptionContextProvider>
    </>
  )
}

export default Layout