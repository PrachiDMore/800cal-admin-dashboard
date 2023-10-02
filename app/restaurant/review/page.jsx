'use client'

import Button from '@/components/custom/Button'
import Layout from '@/components/custom/Layout'
import React, { useState } from 'react'
import { BiSolidEditAlt } from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const page = () => {
	// const [customers, setCustomers] = useState([])

	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Reviews
						{/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
					</div>

					<div className='w-full grid gap-3 p-5'>
						<div className='w-full'>
							<input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
						</div>

						<div className='flex w-full gap-3'>
							<Button text={"Excel"} />
							<Button text={"Print"} />
						</div>

						<div className="w-full text-white overflow-hidden rounded-lg">
							<table className="w-full text-left bg-darkGray ">
								<thead className='overflow-hidden '>
									<tr className='bg-mediumGray rounded-t-lg'>
										<th className="px-6 py-3">
											#
										</th>
										<th className="px-6 py-3">
											Name
										</th>
										<th className="px-6 py-3">
											Reviews
										</th>
										<th className="px-6 py-3">
											Created Date and Time
										</th>
										<th className="px-6 py-3">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className='text-sm'>
									<tr className="border-b border-mediumGray">
										<th className="px-6 py-4 ">
											{/* {index + 1} */}
											1
										</th>
										<td className="px-6 py-4">
											<div className='flex gap-3 items-center'>
												{/* <img className='h-10 w-10' src="/assets/profile.png" alt="" /> */}
												<div>
													{/* <p>{customer.firstname} {customer.lastname}</p> */}
													Jhon Doe
													<p className='text-xs text-mediumGray'>jhondoe</p>
												</div>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className=''>
												<p>5.0</p>
												<p className='text-textGray'>very good</p>
											</div>
										</td>
										<td className="px-6 py-4">
											Mon, September 4, 2023 1:58 PM
										</td>
										{/* <td className="px-6 py-4">
												<span className='h-10 w-10 bg-blue-500' onClick={() => {
													alert("Working!")
												}}><AiFillEye/></span>
											</td> */}
										<td className="px-6 py-4 flex items-center">
											<span className='cursor-pointer h-10 w-10'><BiSolidEditAlt /></span>
											<span className='cursor-pointer h-10 w-10'><MdDelete /></span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</Layout>
			{/* <CustomerModal showModal={showModal} setShowModal={setShowModal} /> */}
		</ >
	)
}

export default page
