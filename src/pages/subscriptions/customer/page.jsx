"use client";

import Button from '@/components/custom/Button';
import Layout from '@/components/custom/Layout'
import CustomerModal from '@/components/custom/Modal/CustomerModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';

const Customer = () => {
	const [customers, setCustomers] = useState([])
	const [showModal, setShowModal] = useState([])
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		axios(`${process.env.REACT_APP_BASE_URL}customer/all`)
			.then((res) => {
				setLoading(false)
				setCustomers(res.data.customers)
			})
			.catch((err) => {
				setLoading(false)
				console.log(err)
			})
	}, []);
	return (
		<div>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Customers
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
							{
								loading ? <h2>Loading...</h2> :
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
											Email
										</th>
										<th className="px-6 py-3">
											Username
										</th>
										<th className="px-6 py-3">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className='text-sm'>
									{
										customers?.map((customer, index) => {
											return <tr className="border-b border-mediumGray">
												<th className="px-6 py-4 ">
													{index + 1}
												</th>
												<td className="px-6 py-4">
													<div className='flex gap-3 items-center'>
														<img className='h-10 w-10' src={customer?.image} alt="" />
														<div>
															<p>{customer.firstname} {customer.lastname}</p>
															<p className='text-xs text-mediumGray'>{customer.address}</p>
														</div>
													</div>
												</td>
												<td className="px-6 py-4">
													{customer.email}
												</td>
												<td className="px-6 py-4">
													{customer.username}
												</td>
												{/* <td className="px-6 py-4">
												<span className='h-10 w-10 bg-blue-500' onClick={() => {
													alert("Working!")
												}}><AiFillEye/></span>
											</td> */}
												<td onClick={() => {
													setShowModal({ show: true, update: true, data: customer })
												}} className="cursor-pointer px-6 py-4">
													<span className='h-10 w-10 bg-blue-500'><AiFillEye /></span>
												</td>
											</tr>
										})
									}
								</tbody>
							</table>
							}
						</div>
					</div>
				</div>
			</Layout>
			<CustomerModal showModal={showModal} setShowModal={setShowModal} />
		</div>
	)
}

export default Customer
