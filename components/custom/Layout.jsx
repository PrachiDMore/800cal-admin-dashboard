import React from 'react'
import Navbar from './Navbar'
import { Lexend } from 'next/font/google'
import { SubscriptionContextProvider } from '@/context/Subscriptions'

const lexend = Lexend({ subsets: ['latin'] })

const Layout = ({ children, navbar = true }) => {
  return (
    <>
      <SubscriptionContextProvider>
        <div className={'Lexend w-screen max-w-screen min-h-screen bg-accent flex text-white ' + lexend.className}>
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