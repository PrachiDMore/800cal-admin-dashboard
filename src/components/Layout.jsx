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
        </div>
      </SubscriptionContextProvider>
    </>
  )
}

export default Layout