import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import React, { useEffect, useState } from 'react'
import { UseMealsContext } from '../../context/Meals';

const Meals = () => {
  const { meals } = UseMealsContext();
  const router = useNavigate()
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Meals
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-3' type="text" placeholder='Search...' />
              <Button text={"Add"} link={"/meal/add"} className={"w-1/6"} />
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
              <table className="w-full text-left bg-darkGray h-full max-h-full">
                <thead className='sticky top-0'>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Id</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">No. Of Meals</th>
                    <th className="px-6 py-3">Price</th>
                  </tr>
                </thead>

                <tbody className='text-sm w-full'>
                  {
                    meals?.map((data, index) => {
                      return <tr key={index} className="border-b border-mediumGray">
                        <Link to={`/meal/${data._id}`} className="h-full font-bold flex items-center px-6 py-4 ">#{data._id?.slice(20)}</Link>
                        <td className="px-6 py-4">
                          <img className='h-10 w-10 rounded-md object-cover' src={data?.logo} alt="" />
                        </td>
                        <td className="px-6 py-4">{data?.name}</td>
                        <td className="px-6 py-4">{data?.meals?.length}</td>
                        <td className="px-6 py-4">{data?.price}</td>
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

export default Meals