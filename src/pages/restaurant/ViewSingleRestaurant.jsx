import Layout from '../../components/Layout'
import Input from '../../components/Input'
import { RiLink } from "react-icons/ri";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UploadComponent from '../../components/UploadComponent'
import Button from '../../components/Button';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import Select from '../../components/Select';

const ViewSingleRestaurant = () => {
	const { _id } = useParams()
	const initialState = {
		username: "",
		contactemail: "",
		contactname: "",
		contactnumber: "",
		title: "",
		enabled: true,
		companyname: "",
		license: "",
		licenseExpiry: 0,
		agreement: "",
		closed: false
	}
	const [data, setData] = useState(initialState);
	const [image, setImage] = useState("");

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.id]: e.target.value
		})
	}

	useEffect(() => {
		if (_id) {
			axios(`${process.env.REACT_APP_BASE_URL}restaurant/profile/${_id}`)
				.then((res) => {
					setData(res.data.restaurant)
					setImage(res?.data?.restaurant?.logo)
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [_id]);
	return (
		<Layout>
			<div className='w-4/5  Lexend overflow-auto'>
				{/* topbar */}
				<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
					Restaurant #{_id?.slice(18)}
					{/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
				</div>

				<div className='w-full grid gap-3 p-5'>
					<UploadComponent setImage={setImage} image={image} />
					<div className='grid grid-cols-2 gap-x-6 gap-y-4'>
						<Input onChange={handleChange} value={data?.username} label={"Username"} type={"text"} placeholder={"Enter username of restaurant"} />
						<Input onChange={handleChange} value={data?.title} label={"Title"} type={"text"} placeholder={"Enter title of restaurant"} />
						<Input onChange={handleChange} value={data?.companyname} label={"Company Name"} type={"text"} placeholder={"Enter company name of restaurant"} />
						<Input onChange={handleChange} value={data?.contactname} label={"Contact Name"} type={"text"} placeholder={"Enter contact name of restaurant"} />
						<Input onChange={handleChange} value={data?.contactnumber} label={"Contact Number"} type={"text"} placeholder={"Enter contact number of restaurant"} />
						<Input onChange={handleChange} value={data?.contactemail} label={"Contact Email"} type={"text"} placeholder={"Enter contact email of restaurant"} />
						<Input onChange={handleChange} value={moment(data?.licenseExpiry).format("DD-MMM-YYYY")} label={"License Expiry"} type={"text"} placeholder={"Enter contact email of restaurant"} />
						<Select label={"Enabled"} value={data?.enabled} options={[{ label: "Enabled", value: true }, { label: "Disabled", value: false }]} />
						<div className='grid grid-cols-12 items-center'>
							<span className={data?.agreement ? 'col-span-11' : "col-span-full"}><Input label={"Restaurant Agreement"} type={"file"} /></span>
							{data?.agreement && <Link href={data?.agreement} target='_blank' className={data?.agreement ? 'col-span-1 flex items-center justify-end text-white' : ""}>{data?.agreement != null && <RiLink className='cursor-pointer text-xl text-blue-600' />}</Link>}
						</div>
						<div className='grid grid-cols-12 items-center'>
							<span className={data?.license ? 'col-span-11' : "col-span-full"}><Input label={"Restaurant License"} type={"file"} /></span>
							{data?.license && <Link href={data?.license} target='_blank' className={data?.license ? 'col-span-1 flex items-center justify-end text-white' : ""}>{data?.license != null && <RiLink className='cursor-pointer text-xl text-blue-600' />}</Link>}
						</div>

						<div className='col-span-2'>
							<Input textarea={false} value={data?.description} label={"Restaurant Description"} type={"text"} placeholder={"Enter description of restaurant"} />
						</div>
					</div>
					<Button text={"Submit"} type={"submit"} className={"mt-2"} />
					<Link to={`/order/restaurant/${data?._id}`}><Button text={"View Orders"} type={"button"} className={"mt-2"} /></Link>
				</div>
			</div>
		</Layout>
	)
}

export default ViewSingleRestaurant