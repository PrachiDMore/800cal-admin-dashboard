import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import UploadComponent from '../../components/UploadComponent';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import axios from 'axios';
import { useEffect } from 'react';

const ProgramForm = () => {
	const navigate = useNavigate()
	const { _id } = useParams();
	const [image, setImage] = useState("");
	const initialFormState = {
		name: "",
		description: "",
		tag: "",
		kcal: "",
		tag: "",
		popular: false,
		disabled: false
	}
	useEffect(() => {
		if (_id) {
			axios(`${process.env.REACT_APP_BASE_URL}program/${_id}`, {
				method: "GET",
			})
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message)
						return
					}
					setImage(res.data.program.logo)
					setFormState(res.data.program)
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [_id])

	const [formState, setFormState] = useState(initialFormState);
	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (image) {
			if (_id) {
				axios(`${process.env.REACT_APP_BASE_URL}program/${_id}`, {
					method: "PATCH",
					data: { ...formState, logo: image },
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then((res) => {
						alert(res.data.message)
						navigate("/programs")
					})
					.catch((err) => {
						alert(err.message)
					})
			} else {
				axios(`${process.env.REACT_APP_BASE_URL}program/create`, {
					method: "POST",
					data: { ...formState, logo: image },
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then((res) => {
						alert(res.data.message)
						setFormState(initialFormState)
						navigate("/programs")
					})
					.catch((err) => {
						alert(err.message)
					})
			}
		}
		else {
			alert("Please upload image!")
		}
	}
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='h-[10vh] w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						{!_id ? "Add Program" : "Edit Program"}
					</div>
					<form onSubmit={handleSubmit} className='p-10 flex flex-col gap-y-3 max-h-[90vh] overflow-scroll'>
						<UploadComponent setImage={setImage} image={image} />
						<Input placeholder={"Enter the program name"} label={"Name"} id={"name"} type={"text"} value={formState.name} onChange={handleChange} />
						<Input placeholder={"Enter the program tag"} label={"Tag"} id={"tag"} type={"text"} value={formState.tag} onChange={handleChange} />
						<Input placeholder={"Enter the program calories"} label={"kCal"} id={"kcal"} type={"number"} value={formState.kcal} onChange={handleChange} />
						<Input placeholder={"Enter the program description"} label={"Description"} id={"description"} type={"text"} value={formState.description} textarea={true} onChange={handleChange} />
						<Select options={[{
							label: "Yes",
							value: true
						}, {
							label: "No",
							value: false
						}]} label={"Popular"} id={"popular"} value={formState.popular} onChange={handleChange} />
						<Select options={[{
							label: "Yes",
							value: true
						}, {
							label: "No",
							value: false
						}]} label={"Disable"} id={"disabled"} value={formState.disabled} onChange={handleChange} />
						<Button type={"submit"} text={"Submit"} />
					</form>
				</div>
			</Layout>
		</>
	)
}

export default ProgramForm
