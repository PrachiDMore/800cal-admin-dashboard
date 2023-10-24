import Button from '../../components/Button';
import Layout from '../../components/Layout'
import CustomerModal from '../../components/modal/CustomerModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';

const Customer = () => {
	const [customers, setCustomers] = useState([])
	const [showModal, setShowModal] = useState([])

	useEffect(() => {
		axios('https://800cal-backend.vercel.app/customer/all')
			.then((res) => {
				setCustomers(res.data.customers)
			})
			.catch((err) => {
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
					</div>
					<div className='w-full grid gap-3 p-5'>
						<div className='w-full'>
							<input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
						</div>

						<div className='flex w-full gap-3'>
							<Button text={"Excel"} />
							<Button text={"Print"} />
						</div>

						<div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
							<table className="w-full text-left bg-darkGray h-full max-h-full">
								<thead className='sticky top-0'>
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
						</div>
					</div>
				</div>
			</Layout>
			<CustomerModal showModal={showModal} setShowModal={setShowModal} />
		</div>
	)
}

export default Customer
