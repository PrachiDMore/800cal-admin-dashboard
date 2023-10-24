import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useParams } from 'react-router-dom'
import UploadComponent from '../../components/UploadComponent';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const ProgramForm = () => {
	const { _id } = useParams();
	const [image, setImage] = useState("");
	const initialFormState = {
		name: "",
		description: "",
		tag: "",
		kcal: "",
		tag: "",
		popular: false
	}
	const [formState, setFormState] = useState(initialFormState);
	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='h-[10vh] w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						{!_id ? "Add Program" : "Edit Program"}
					</div>
					<form className='p-10 flex flex-col gap-y-3 max-h-[90vh] overflow-scroll'>
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
						<Button type={"submit"} text={"Submit"} />
					</form>
				</div>
			</Layout>
		</>
	)
}

export default ProgramForm
