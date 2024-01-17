import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { AiFillEye } from 'react-icons/ai';
import Button from '../../components/Button';
import ViewRider from '../../components/modal/ViewRider';
import { UseRidersContext } from '../../context/Riders';
import { useNavigate } from 'react-router-dom';
import { UseManagerContext } from '../../context/Managers';

const Manager = () => {
  const [viewManager, setViewManager] = useState(false)
  const { managers } = UseManagerContext();
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Manager
            {/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
          </div>
          <div className='w-full grid gap-3 p-5'>
            <div className='w-full flex gap-3'>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
              <Button className={"w-28"} text={"Add"} onClick={() => navigate("/manager/create")} />
            </div>

            <div className='hidden w-full gap-3'>
              <Button text={"Excel"} />
              <Button text={"Print"} />
            </div>

            <div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
              <table className="w-full text-left bg-darkGray h-full max-h-full">
                <thead className='sticky top-0'>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {
                    managers?.map((manager, index) => {
                      return <tr key={index} className="border-b border-mediumGray">
                        <th className="px-6 py-4 ">#{index + 1}</th>
                        <td className="px-6 py-4">
                          <div className='flex gap-3 items-center'>
                            <img className='h-10 w-10' src={manager?.image} alt="" />
                            <p>{manager?.firstname} {manager?.lastname}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">{manager?.email}</td>
                        <td className="px-6 py-4">{manager?.username}</td>
                        <td className="px-6 py-4">{manager?.phonenumber}</td>
                        {/* <td className="px-6 py-4">
                          <span className='h-10 w-10 bg-blue-500' onClick={() => {
                            alert("Working!")
                          }}><AiFillEye/></span>
                        </td> */}
                        <td className="cursor-pointer px-6 py-4">
                          <span onClick={() => { setViewManager(true) }} className='h-10 w-10 bg-blue-500'><AiFillEye /></span>
                        </td>
                      </tr>
                    })
                  }

                  {/* {
										customers?.map((customer, index) => {
											return <tr className="border-b border-mediumGray">
											<th className="px-6 py-4 ">
												{index+1}
											</th>
											<td className="px-6 py-4">
												<div className='flex gap-3 items-center'>
													<img className='h-10 w-10' src="/assets/profile.png" alt="" />
													<div>
														<p>{customer.firstname} {customer.lastname}</p>
														<p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
													</div>
												</div>
											</td>
											<td className="px-6 py-4">
												{customer.email}
											</td>
											<td className="px-6 py-4">
												{customer.username}
											</td>
											 <td className="px-6 py-4">
												<span className='h-10 w-10 bg-blue-500' onClick={() => {
													alert("Working!")
												}}><AiFillEye/></span>
											</td> 
											<td onClick={() => {
													setShowModal({ show: true, update: true, data: customer })
												}} className="cursor-pointer px-6 py-4">
													<span className='h-10 w-10 bg-blue-500'><AiFillEye /></span>
												</td>
										</tr>
										})
									} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
      {/* <ViewRider viewRider={viewRider} setViewRider={setViewRider} isRestaurant={false} /> */}
    </>
  )
}

export default Manager