import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import axios from 'axios';
import { UseProgramContext } from '../../context/Program'
import { useEffect } from 'react';

const MealInfo = () => {
	const navigate = useNavigate()
	const { program } = UseProgramContext();
	const [appliedPrice, setAppliedPrice] = useState(0)
	const [isApplied, setIsApplied] = useState(false)
	const { _id } = useParams();
	const initialFormState = {
		name: "",
		description: "",
		kcal: "",
		disabled: true,
		program: "",
		price: 0
	}
	useEffect(() => {
		if (_id) {
			axios(`${process.env.REACT_APP_BASE_URL}/meal/${_id}`, {
				method: "GET",
			})
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message)
						return
					}
					setFormState(res.data.meal)
					axios(`${process.env.REACT_APP_BASE_URL}/meal-application/${res.data.meal._id}`, {
						method: "GET",
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`
						}
					})
						.then((res) => {
							if (res.data.error) {
								// alert(res.data.message)
								return
							}
							else {
								setIsApplied(true)
							}
							setAppliedPrice(res.data.info.price)
						})
						.catch((err) => {
							alert(err.message)
						})
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
		axios(`${process.env.REACT_APP_BASE_URL}/meal-application/create`, {
			method: "POST",
			data: {
				meal: _id,
				price: appliedPrice,
			},
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res) => {
				if (res.data.error) {
					alert(res.data.message)
					return
				}
			})
			.catch((err) => {
				alert(err.message)
			})
	}
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='h-[10vh] w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Meal Info
					</div>
					<form onSubmit={handleSubmit} className='p-10 flex flex-col gap-y-3 max-h-[90vh] overflow-scroll'>
						<div className='flex justify-center'>
							<img src={formState?.logo} className='h-24 w-24 object-cover border rounded-lg' alt="" />
						</div>
						<Input disabled={true} placeholder={"Enter the meal name"} label={"Name"} id={"name"} type={"text"} value={formState.name} onChange={handleChange} />
						{/* <Input placeholder={"Enter the meal tag"} label={"Tag"} id={"tag"} type={"text"} value={formState.tag} onChange={handleChange} /> */}
						<Input disabled={true} placeholder={"Enter the meal calories"} label={"kCal"} id={"kcal"} type={"number"} value={formState.kcal} onChange={handleChange} />
						<Input placeholder={"Enter the meal price"} label={"Price"} id={"price"} type={"number"} value={appliedPrice} textarea={false} onChange={(e) => setAppliedPrice(Number(e.target.value))} />
						<Select disabled={true} options={program?.map((data) => {
							return {
								...data,
								label: data?.name,
								value: data?._id
							}
						})} label={"Program"} id={"program"} value={formState?.program?._id} onChange={handleChange} />
						<Input disabled={true} placeholder={"Enter the meal description"} label={"Description"} id={"description"} type={"text"} value={formState.description} textarea={true} onChange={handleChange} />
						{!isApplied && <Button type={"submit"} text={"Submit"} />}
					</form>
				</div>
			</Layout>
		</>
	)
}

export default MealInfo