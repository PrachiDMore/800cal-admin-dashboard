"use client";

import Button from '@/components/custom/Button';
import Layout from '@/components/custom/Layout';
import React, { useState } from 'react'

const page = () => {
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Cancelled Orders
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full'>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
            </div>

            <div className='flex gap-4'>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
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
                      Description
                    </th>
                    <th className="px-6 py-3">
                      Quantity
                    </th>
                    <th className="px-6 py-3">
                      Restaurant Name
                    </th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr className="border-b border-mediumGray cursor-pointer">
                    <th className="px-6 py-4 ">
                      #123
                    </th>
                    <td className="px-6 py-4">
                      <div className='flex gap-1 items-center'>
                        <img className='h-8 w-8' src="/assets/profile.png" alt="" />
                        <div>
                          <p>John Doe</p>
                          <p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      12th July, 2023 23:00
                    </td>
                    <td className="px-6 py-4">
                      Home delivery
                    </td>
                    <td className="px-6 py-4">
                      1
                    </td>
                    <td className="px-6 py-4">
                    <div className='flex items-center gap-3'><img  className='border-green border-2 rounded-3xl p-1 h-8 w-8' src="/assets/resto.png" alt="" /> Chilis</div>
                    </td>
                  </tr>
                  <tr className="">
                    <th className="px-6 py-4 ">
                      #123
                    </th>
                    <td className="px-6 py-4">
                      <div className='flex gap-1 items-center'>
                        <img className='h-8 w-8' src="/assets/profile.png" alt="" />
                        <div>
                          <p>John Doe</p>
                          <p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      12th July, 2023 23:00
                    </td>
                    <td className="px-6 py-4">
                      Home delivery
                    </td>
                    <td className="px-6 py-4">
                      1
                    </td>
                    <td className="px-6 py-4">
                    <div className='flex items-center gap-3'><img  className='border-green border-2 rounded-3xl p-1 h-8 w-8' src="/assets/resto.png" alt="" /> Chilis</div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default page
