import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Details = () => {

	const initialFormState = {
		email: "",
		phonenumber: "",
		instagram: "",
		twitter: "",
		tiktok: "",
		website: "",
		snapchat: "",
		whatsapp: "",
		facebook: "",
	}
	const [privacypolicy, setPrivacypolicy] = useState("")
	const [termsandconditions, setTermsandconditions] = useState("")
	const [help, setHelp] = useState("")
	const [formState, setFormState] = useState(initialFormState);
	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		axios(`${process.env.REACT_APP_BASE_URL}admin/details/update`, {
			method: "PATCH",
			data: { ...formState, privacypolicy, termsandconditions, help },
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				if (res.data.error) {
					alert(res.data.message)
				} else {
					setFormState(res.data.details)
					setTermsandconditions(res.data.details?.termsandconditions)
					setHelp(res.data.details?.help)
					setPrivacypolicy(res.data.details?.privacypolicy)
				}
			})
	}
	useEffect(() => {
		axios(`${process.env.REACT_APP_BASE_URL}admin/details`, {
			method: "GET"
		})
			.then((res) => {
				setFormState(res.data.details)
				setTermsandconditions(res.data.details?.termsandconditions)
				setHelp(res.data.details?.help)
				setPrivacypolicy(res.data.details?.privacypolicy)
			})
	}, [])
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='h-[10vh] w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Details
					</div>
					<form onSubmit={handleSubmit} className='p-10 grid grid-cols-2 gap-x-5 gap-y-3 max-h-[90vh] overflow-scroll'>
						<Input placeholder={"Enter the Email address"} label={"Email Address"} id={"email"} type={"email"} value={formState?.email} onChange={handleChange} />
						<Input placeholder={"Enter the Phone Number"} label={"Mob No."} id={"phonenumber"} type={"text"} value={formState?.phonenumber} onChange={handleChange} />
						<Input placeholder={"Enter the Instagram URL"} label={"Instagram"} id={"instagram"} type={"url"} value={formState?.instagram} onChange={handleChange} />
						<Input placeholder={"Enter the Facebook URL"} label={"Facebook"} id={"facebook"} type={"url"} value={formState?.facebook} onChange={handleChange} />
						<Input placeholder={"Enter the WhatsApp URL"} label={"WhatsApp"} id={"whatsapp"} type={"url"} value={formState?.whatsapp} onChange={handleChange} />
						<Input placeholder={"Enter the Twitter URL"} label={"Twitter"} id={"twitter"} type={"url"} value={formState?.twitter} onChange={handleChange} />
						<Input placeholder={"Enter the Snapchat URL"} label={"Snapchat"} id={"snapchat"} type={"url"} value={formState?.snapchat} onChange={handleChange} />
						<Input placeholder={"Enter the Website URL"} label={"Website"} id={"website"} type={"url"} value={formState?.website} onChange={handleChange} />
						<div className='flex flex-col col-span-2'>
							<label className='text-white mb-1' htmlFor={"termsandconditions"}>{"Terms & Conditions"}: </label>
							<ReactQuill placeholder='Type content here' className='placeholder:text-white h-[300px] col-span-2 w-full' theme="snow" value={termsandconditions} onChange={setTermsandconditions} />
						</div>
						<div className='flex flex-col col-span-2 mt-10'>
							<label className='text-white mb-1' htmlFor={"privacypolicy"}>{"Privacy Policy"}: </label>
							<ReactQuill placeholder='Type content here' className='placeholder:text-white h-[300px] col-span-2 w-full' theme="snow" value={privacypolicy} onChange={setPrivacypolicy} />
						</div>
						<div className='flex flex-col col-span-2 mt-10'>
							<label className='text-white mb-1' htmlFor={"help"}>{"Help"}: </label>
							<ReactQuill placeholder='Type content here' className='placeholder:text-white h-[300px] col-span-2 w-full' theme="snow" value={help} onChange={setHelp} />
						</div>
						<Button type={"submit"} text={"Submit"} className={"mt-12 col-span-2"} />
					</form>
				</div>
			</Layout>
		</>
	)
}

export default Details
