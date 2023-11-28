import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import React, { useEffect, useState } from 'react'
import { UseMealsContext } from '../../context/Meals';
import { UseMealApplicationContext } from '../../context/MealApplications';
import axios from 'axios';

const MealsApplication = () => {
  const { applications } = UseMealApplicationContext();
  const router = useNavigate()

  const handleApprove = (data) => {
    if (data) {
      axios(`${process.env.REACT_APP_BASE_URL}meal-application/approve`, {
        method: "PATCH",
        data: { restaurant: data?.restaurant._id, meal: data?.meal._id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.message)
          } else {
            alert(res.data.message)
          }
        })
        .catch((err) => {
          alert(err.message)
        })
    } else {
      alert("Something went wrong!");
    }
  }
  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Meals Applications
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-3' type="text" placeholder='Search...' />
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
              <table className="w-full text-left bg-darkGray h-full max-h-full">
                <thead className='sticky top-0'>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-4">Id</th>
                    <th className="px-6 py-4">Meal</th>
                    <th className="px-6 py-4">Program</th>
                    <th className="px-6 py-4">Restaurant</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>

                <tbody className='text-sm w-full'>
                  {
                    applications?.map((data, index) => {
                      return <tr key={index} className="border-b border-mediumGray">
                        <Link to={`/meal/${data._id}`} className="h-full font-bold flex items-center px-6 py-4 ">#{data._id?.slice(20)}</Link>
                        <td className="px-6 py-2">{data?.meal.name}</td>
                        <td className="px-6 py-2">{data?.meal.program.name}</td>
                        <td className="px-6 py-2"><Link to={`/restaurant/${data?.restaurant._id}`}>{data?.restaurant.title}</Link></td>
                        <td className="px-6 py-2"><Button disabled={data?.approved} onClick={() => handleApprove(data)} text={!data?.approved ? "Approve" : "Approved"} className={'disabled:cursor-not-allowed px-3 py-1 w-max'} /></td>
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

export default MealsApplication