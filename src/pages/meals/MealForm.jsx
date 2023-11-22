import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import UploadComponent from '../../components/UploadComponent';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import axios from 'axios';
import { useEffect } from 'react';
import { UseProgramContext } from '../../context/Program';
import SearchableSelect from '../../components/SearchableSelect';

const MealForm = () => {
	const navigate = useNavigate()
	const { _id } = useParams();
	const [image, setImage] = useState("");
	const [meals, setMeals] = useState([]);
	const { programs } = UseProgramContext()
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
			axios(`${process.env.REACT_APP_BASE_URL}meal/${_id}`, {
				method: "GET",
			})
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message)
						return
					}
					setMeals(res.data.meal.meals)
					setImage(res.data.meal.logo)
					setFormState(res.data.meal)
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
				axios(`${process.env.REACT_APP_BASE_URL}meal/${_id}`, {
					method: "PATCH",
					data: { ...formState, logo: image, meals },
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then((res) => {
						if (res.data.error) {
							alert(res.data.message)
						} else {
							navigate("/meals")
						}
					})
					.catch((err) => {
						alert(err.message)
					})
			} else {
				axios(`${process.env.REACT_APP_BASE_URL}meal/create`, {
					method: "POST",
					data: { ...formState, logo: image, meals },
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then((res) => {
						alert(res.data.message)
						setFormState(initialFormState)
						navigate("/meals")
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
						{!_id ? "Add Meal" : "Edit Meal"}
					</div>
					<form onSubmit={handleSubmit} className='p-10 flex flex-col gap-y-3 max-h-[90vh] overflow-scroll'>
						<UploadComponent setImage={setImage} image={image} />
						<Input placeholder={"Enter the meal name"} label={"Name"} id={"name"} type={"text"} value={formState.name} onChange={handleChange} />
						{/* <Input placeholder={"Enter the meal tag"} label={"Tag"} id={"tag"} type={"text"} value={formState.tag} onChange={handleChange} /> */}
						<Input placeholder={"Enter the meal calories"} label={"kCal"} id={"kcal"} type={"number"} value={formState.kcal} onChange={handleChange} />
						<Input placeholder={"Enter the meal price"} label={"Price"} id={"price"} type={"number"} value={formState.price} textarea={false} onChange={handleChange} />
						<Select options={[{
							label: "Yes",
							value: true
						}, {
							label: "No",
							value: false
						}]} label={"Disable"} id={"disabled"} value={formState.disabled} onChange={handleChange} />
						<Select options={programs?.map((data) => {
							return {
								...data,
								label: data?.name,
								value: data?._id
							}
						})} label={"Program"} id={"program"} value={formState.program} onChange={handleChange} />
						<SearchableSelect value={meals} label={"Meals"} isMulti={true} onChange={(e) => { setMeals(e) }} options={[
							{
								label: "Breakfast",
								value: "Breakfast"
							},
							{
								label: "Main",
								value: "Main"
							},
							{
								label: "Snack/Soup",
								value: "Snack/Soup"
							},
						]} />
						<Input placeholder={"Enter the meal description"} label={"Description"} id={"description"} type={"text"} value={formState.description} textarea={true} onChange={handleChange} />
						<Button type={"submit"} text={"Submit"} />
					</form>
				</div>
			</Layout>
		</>
	)
}

export default MealForm
