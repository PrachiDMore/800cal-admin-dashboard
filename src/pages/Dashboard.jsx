import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { AiFillEye } from 'react-icons/ai'
import { PiNotepad, PiWallet } from "react-icons/pi"
import { AiOutlineTags } from "react-icons/ai"
import { BsCart } from "react-icons/bs"
import moment from 'moment'
import { UseOrderContext } from '../context/Orders'
import { UseSubscriptionContext } from '../context/Subscriptions'
import { UseRestaurantContext } from '../context/Restaurant'
import { IoRestaurantOutline } from "react-icons/io5";
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts'

const Dashboard = () => {
	const { orders } = UseOrderContext();
	const { subscriptions } = UseSubscriptionContext();
	const { restaurants } = UseRestaurantContext()
	return (
		<>

			<Layout>
				<div className='w-4/5  Lexend'>

					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Dashboard
					</div>

					<div className='w-full p-5 grid grid-cols-1 gap-4'>
						{/* 1st section */}
						<div className='w-full grid grid-cols-4 gap-8'>
							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Current Orders</p>
									<PiNotepad className='text-green text-3xl' />
								</div>
								<p className='text-2xl font-bold'>{orders.filter((data) => data.status === "processing").length}</p>
							</div>

							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Total Orders</p>
									<PiNotepad className='text-green text-3xl' />
								</div>
								<p className='text-2xl font-bold'>{orders.length}</p>
							</div>
							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Subscriptions</p>
									<BsCart className='text-green text-2xl font-bold' />
								</div>
								<p className='text-2xl font-bold'>{subscriptions?.length}</p>
							</div>
							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Restaurants</p>
									<IoRestaurantOutline className='text-green text-2xl font-bold' />
								</div>
								<p className='text-2xl font-bold'>{restaurants?.length}</p>
							</div>
						</div>
						<div className='grid grid-cols-2'>
							<PieChart
								width={"500"}
								height={300}
								title='Orders'
								className='text-white fill-white'
								slotProps={{
									legend: {
										labelStyle: {
											accentColor: "#ffffff",
											color: "#ffffff",
											colorScheme: 'dark',
											fill: "#ffffff"
										},
									},
								}}
								series={[
									{
										data: [
											{ id: 0, value: orders.filter((data) => data.status === "processing").length, label: 'Processing' },
											{ id: 1, value: orders.filter((data) => data.status === "assigned").length, label: 'Assigned' },
											{ id: 2, value: orders.filter((data) => data.status === "completed").length, label: 'Completed' },
											{ id: 3, value: orders.filter((data) => data.status === "cancelled").length, label: 'Cancelled' },
										],
										color: "#fff",
										innerRadius: 62,
										outerRadius: 100,
										paddingAngle: 3,
										cornerRadius: 5,
										startAngle: 0,
										endAngle: 360,
									},
								]}
							/>
							<LineChart
								slotProps={{
									legend: {
										labelStyle: {
											fill: "#ffffff"
										}
									},
									axisLabel: {
										style: {
											color: "#ffffff",
											fill: "#ffffff"
										},
										fontStyle: {
											color: "#ffffff"
										}
									},
									axisContent: {
										axis: {
											labelStyle: {
												fill: "#ffffff"
											}
										}
									}
								}}
								xAxis={[{
									data: [
										orders.filter((data) => data.status === "processing").length,
										orders.filter((data) => data.status === "assigned").length,
										orders.filter((data) => data.status === "completed").length,
										orders.filter((data) => data.status === "cancelled").length
									]
								}]}
								series={[
									{
										data: [
											orders.filter((data) => data.status === "processing").length,
											orders.filter((data) => data.status === "assigned").length,
											orders.filter((data) => data.status === "completed").length,
											orders.filter((data) => data.status === "cancelled").length,
										]
									},
								]}
								width={500}
								height={300}
							/>
						</div>
						{/* 2nd section */}
						<div className='w-full hidden grid-cols-2 gap-x-4'>
							<div className='bg-darkGray rounded-xl p-3'>
								<p className='font-semibold'>Revenue</p>
							</div>

							<div className='bg-darkGray rounded-xl p-3'>
								<p className='font-semibold'>Summary</p>
								<p className='text-mediumGray leading-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident natus quo culpa, illo asperiores nisi magnam id excepturi unde?</p>
							</div>
						</div>

						{/* 3rd section */}
						<div className='w-full grid gap-4'>
							<p className='font-semibold text-xl '>Orders</p>


							<div className="w-full text-white  overflow-auto rounded-lg max-h-[40vh]">
								<table className="w-full text-left bg-darkGray">
									<thead className='overflow-hidden sticky top-0'>
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
												Restaurant
											</th>
											<th className="px-6 py-3">
												Status
											</th>
										</tr>
									</thead>

									<tbody className='text-sm'>
										{
											orders?.slice(0, 2)?.map((order) => {
												return <tr key={order?._id} className="border-b border-mediumGray">
													<Link to={`/order/${order?._id}`} className="flex justify-center items-center h-full font-bold px-6 py-4 ">
														#{order?._id?.slice(18)}
													</Link>
													<td className="px-6 py-4">
														<div className='flex gap-1 items-center'>
															<img className='h-8 w-8 rounded-lg' src={order?.customer?.image} alt="" />
															<div>
																<p>{order?.customer?.firstname} {order?.customer?.lastname}</p>
																<p className='text-xs text-mediumGray'>{order?.customer?.address}</p>
															</div>
														</div>
													</td>
													<td className="px-6 py-4">
														{moment(order?.date).format("Do MMM, YYYY - HH:mm")}
													</td>
													<td className="px-6 py-4">
														{order?.program?.name} ({order?.meals?.name})
													</td>
													<td className="px-6 py-4">
														{order?.restaurant?.title}
													</td>
													<td className="px-6 py-4">
														Being delivered
													</td>
												</tr>
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>


				</div>
			</Layout>
		</>
	)
}

export default Dashboard