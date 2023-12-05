import React from 'react'
import NavItem from './NavItem'
import { UseSubscriptionContext } from '../context/Subscriptions'
import { UseOrderContext } from '../context/Orders'
import { UseProgramContext } from '../context/Program'
import { UseMealsContext } from '../context/Meals'

const Navbar = () => {
  const { subscriptions } = UseSubscriptionContext()
  const { orders } = UseOrderContext()
  const { programs } = UseProgramContext()
  const { meals } = UseMealsContext()
  return (
    <>
      <div className='w-1/5 p-5 Lexend border-r border-textGray max-h-screen overflow-scroll'>
        <div>
          <img className='h-20 w-20' src="/assets/logo.png" alt="" />
        </div>
        <div className='text-white grid grid-cols-1 gap-2'>
          <NavItem link={{
            url: "/restaurant",
            title: "Restaurant"
          }} />
          <NavItem title={"Subscriptions"} items={[
            {
              url: "/subscription/all",
              title: "All Subscriptions",
              number: subscriptions?.length
            },
            {
              url: "/subscription/new",
              title: "New Subscriptions",
              number: subscriptions?.filter((data) => { return data?.order_status === "new" }).length
            },
            // {
            //   url: "/confirmed-orders",
            //   title: "Confirmed Orders",
            //   number: 2
            // },
            // {
            //   url: "/completed-orders",
            //   title: "Completed Orders",
            //   number: 2
            // },
            // {
            //   url: "/cancelled-orders",
            //   title: "Cancelled Orders",
            //   number: 2
            // }
          ]} />
          <NavItem title={"Orders"} items={[
            {
              url: "/orders/all",
              title: "All Orders",
              number: orders?.length
            },
            {
              url: "/subscription/new",
              title: "New Subscriptions",
              number: 0
            },
            // {
            //   url: "/confirmed-orders",
            //   title: "Confirmed Orders",
            //   number: 2
            // },
            // {
            //   url: "/completed-orders",
            //   title: "Completed Orders",
            //   number: 2
            // },
            // {
            //   url: "/cancelled-orders",
            //   title: "Cancelled Orders",
            //   number: 2
            // }
          ]} />
          <NavItem link={{
            url: "/customer",
            title: "Customer"
          }} />
          <NavItem title={"Program"} items={[
            {
              url: "/programs",
              title: "Programs",
              number: programs?.length
            },
            {
              url: "/program/add",
              title: "Add Program",
            }
          ]} />
          <NavItem title={"Meals"} items={[
            {
              url: "/meals",
              title: "Meals",
              number: meals?.length
            },
            {
              url: "/meal/add",
              title: "Add Meal",
            },
            {
              url: "/meal/application",
              title: "Meals Application",
            }
          ]} />
          
          <NavItem link={{
            url: "/accounts",
            title: "Accounts"
          }} />
          <NavItem link={{
            url: "/rider",
            title: "Rider"
          }} />
          {/* <NavItem link={{
            url: "/rider/restaurant",
            title: "Restaurant Rider"
          }} /> */}
          {/* <NavItem link={{
            url: "/reviews",
            title: "Reviews"
          }} /> */}
          <NavItem link={{
            url: "/details",
            title: "Details"
          }} />
        </div>
      </div>
    </>
  )
}

export default Navbar