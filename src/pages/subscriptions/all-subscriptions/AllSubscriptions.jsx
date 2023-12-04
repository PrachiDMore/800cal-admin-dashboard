import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { UseSubscriptionContext } from '../../../context/Subscriptions';

const AllSubscriptions = () => {
  const { subscriptions } = UseSubscriptionContext();

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            All Subscriptions
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full'>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
            </div>

            <div className='flex gap-4'>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white overflow-scroll rounded-lg max-h-[71vh]">
              <table className="w-full text-left bg-darkGray h-full max-h-full">
                <thead className='sticky top-0'>
                  <tr key={"table-head"} className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">
                      Id
                    </th>
                    <th className="px-6 py-3">
                      Customer
                    </th>
                    <th className="px-6 py-3">
                      Date
                    </th>
                    <th className="px-6 py-3">
                      Duration
                    </th>
                    <th className="px-6 py-3">
                      Fridays Included
                    </th>
                    <th className="px-6 py-3">
                      Restaurant Category
                    </th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  {
                    subscriptions?.map((order, index) => {
                      return <tr key={index} className="border-b border-mediumGray cursor-pointer">
                        <th className="px-6 py-4 ">
                          #{index + 1}
                        </th>
                        <td className="px-6 py-4">
                          <div className='flex gap-1 items-center'>
                            <img className='h-8 w-8 mr-1' src={order.customer?.image} alt="" />
                            <div>
                              <p>{order.customer.firstname} {order.customer.lastname}</p>
                              <p className='text-xs text-mediumGray'>{order.customer?.address || "N/A"}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {moment(order.timestamp).format("Do MMM, YYYY, h:mm A")}
                        </td>
                        <td className="px-6 py-4 flex flex-col">
                          <p>{moment(order.startDate).format("Do MMM, YYYY")} - {moment(order?.endDate).format("Do MMM, YYYY")}</p>
                          <p className='text-xs text-mediumGray'>{order?.duration} Days</p>
                        </td>
                        <td className="px-6 py-4">
                          {order?.includeFridays ? "Included" : "Excluded"}
                        </td>
                        <td className="px-6 py-4">
                          <div className='flex items-center gap-3'>
                            {/* <img className='border-green border-2 rounded-3xl p-1 h-8 w-8' src="/assets/resto.png" alt="" /> Chilis</div> */}
                            {order?.category}
                          </div>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AllSubscriptions
