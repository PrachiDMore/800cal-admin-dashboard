"use client"

import Layout from '@/components/custom/Layout'
import Input from '@/components/custom/Input'
import { RiLink } from "react-icons/ri";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UploadComponent from '@/components/UploadComponent'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import moment from 'moment';

const ViewSingleRestaurant = ({ params }) => {
	const [data, setData] = useState();
	const [image, setImage] = useState("");

	useEffect(() => {
		if (params?._id) {
			axios(`https://800cal-backend.vercel.app/restaurant/profile/${params?._id}`)
				.then((res) => {
					console.log(res.data.restaurant)
					setData(res.data.restaurant)
					setImage(res?.data?.restaurant?.logo)
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [params]);
	return (
		<Layout>
			<div className='w-4/5  Lexend'>
				{/* topbar */}
				<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
					Restaurant #{params._id}
					{/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
				</div>

				<div className='w-full grid gap-3 p-5'>
					<UploadComponent setImage={setImage} image={image} />
					<div className='grid grid-cols-2 gap-x-6 gap-y-4'>
						<Input value={data?.username} label={"Username"} type={"text"} placeholder={"Enter username of restaurant"} />
						<Input value={data?.title} label={"Title"} type={"text"} placeholder={"Enter title of restaurant"} />
						<Input value={data?.companyname} label={"Company Name"} type={"text"} placeholder={"Enter company name of restaurant"} />
						<Input value={data?.contactname} label={"Contact Name"} type={"text"} placeholder={"Enter contact name of restaurant"} />
						<Input value={data?.contactnumber} label={"Contact Number"} type={"text"} placeholder={"Enter contact number of restaurant"} />
						<Input value={data?.contactemail} label={"Contact Email"} type={"text"} placeholder={"Enter contact email of restaurant"} />
						<Input value={moment(data?.licenseExpiry).format("DD-MMM-YYYY")} label={"License Expiry"} type={"text"} placeholder={"Enter contact email of restaurant"} />
						<div className='grid grid-cols-12 items-center'>
							<span className={data?.agreement ? 'col-span-11' : "col-span-full"}><Input label={"Restaurant Agreement"} type={"file"} /></span>
							<Link href={data?.agreement} target='_blank' className={data?.agreement ? 'col-span-1 flex items-center justify-end text-white' : ""}>{data?.agreement != null && <RiLink className='cursor-pointer text-xl text-blue-600' />}</Link>
						</div>
						<div className='grid grid-cols-12 items-center'>
							<span className={data?.license ? 'col-span-11' : "col-span-full"}><Input label={"Restaurant License"} type={"file"} /></span>
							<Link href={data?.license} target='_blank' className={data?.license ? 'col-span-1 flex items-center justify-end text-white' : ""}>{data?.license != null && <RiLink className='cursor-pointer text-xl text-blue-600' />}</Link>
						</div>
						<div className='grid grid-cols-12 items-center'>
							<span className={data?.agreement ? 'col-span-11' : "col-span-full"}><Input label={"Restaurant Agreement"} type={"file"} /></span>
							<Link href={data?.agreement} target='_blank' className={data?.agreement ? 'col-span-1 flex items-center justify-end text-white' : ""}>{data?.agreement != null && <RiLink className='cursor-pointer text-xl text-blue-600' />}</Link>
						</div>

						<div className='col-span-2'>
							<Input textarea={false} value={data?.description} label={"Restaurant Description"} type={"text"} placeholder={"Enter description of restaurant"} />
						</div>
					</div>
					<button type='button' className='m-auto mt-3 w-32 bg-lightgreen text-center px-5 py-3 rounded-lg hover:bg-darkgreen duration-300' onClick={() => widgetRef.current.open()}>
						Upload
					</button>
				</div>
			</div>
		</Layout>
	)
}

export default ViewSingleRestaurant