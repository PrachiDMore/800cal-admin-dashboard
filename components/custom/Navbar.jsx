import React from 'react'
import NavItem from './NavItem'
import { BsBox } from 'react-icons'
import { UseSubscriptionContext } from '@/context/Subscriptions'

const Navbar = () => {
  const { orders } = UseSubscriptionContext()
  console.log(orders)
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
          }} />
          <NavItem title={"Subscriptions"} order={true} items={[
            {
              url: "/all-subscriptions",
              title: "All Subscriptions"
            },
            {
              url: "/new-subscriptions",
              title: "New Subscriptions"
            },
            {
              url: "/confirmed-orders",
              title: "Confirmed Orders"
            },
            {
              url: "/completed-orders",
              title: "Completed Orders"
            },
            {
              url: "/cancelled-orders",
              title: "Cancelled Orders"
            }
          ]} />
          <NavItem link={{
            url: "/customer",
            title: "Customer"
          }} />
          <NavItem link={{
            url: "/programs",
            title: "Programs"
          }} />
          <NavItem link={{
            url: "/rider",
            title: "Rider"
          }} />
          <NavItem link={{
            url: "/rider/restaurant",
            title: "Restaurant Rider"
          }} />
          <NavItem link={{
            url: "/reviews",
            title: "Reviews"
          }} />
        </div>
      </div>
    </>
  )
}

export default Navbar