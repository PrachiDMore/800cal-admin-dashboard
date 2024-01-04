"use client"

import Button from '@/components/custom/Button';
import Layout from '@/components/custom/Layout'
import RestoProfile from '@/components/custom/Modal/RestaurantProfile';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Restaurant = () => {
	const [restaurants, setRestaurants] = useState([]);
	const reset = { show: false, update: false, data: undefined }
	const [modal, setModal] = useState(reset)
	const router = useRouter()

	useEffect(() => {
		axios('https://800cal-backend.vercel.app/restaurant/all')
			.then((res) => {
				setRestaurants(res.data.restaurants)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, []);

	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Restaurants
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
										restaurants?.map((restaurant, index) => {
											return <tr className="border-b border-mediumGray">
												<th className="px-6 py-4 ">{index + 1}</th>
												<td className="px-6 py-4">
													<div className='flex gap-3 items-center'>
														<img className='h-10 w-10 object-contain' src={restaurant?.logo} alt="" />
														<div>
															<p>{restaurant?.title}</p>
															<p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
														</div>
													</div>
												</td>
												<td className="px-6 py-4">{restaurant?.email}</td>
												<td className="px-6 py-4">{restaurant?.username}</td>
												<td className="px-6 py-4 flex items-center">
													<Link href={`/restaurant/${restaurant?._id}`} className='cursor-pointer h-10 w-10'><AiFillEye /></Link>
													<span onClick={() => router.push('/restaurant/review')} className='cursor-pointer h-10 w-10 text-lg'><MdOutlineRateReview /></span>
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
			<RestoProfile modal={modal} setModal={setModal} />
		</>
	)
}

export default Restaurant
