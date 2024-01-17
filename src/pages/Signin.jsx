import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Layout from "../components/Layout";
import axios from 'axios';
import React, { useState } from 'react'
import Select from '../components/Select';

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("admin");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			if (type === "admin") {
				axios(`${process.env.REACT_APP_BASE_URL}admin/signin`, {
					method: "POST",
					data: {
						"username": username,
						"password": password
					}
				})
					.then((res) => {
						if (!res.data.error) {
							localStorage.setItem('token', res.data.token)
							localStorage.setItem('role', "admin")
							alert(res.data.message)
							navigate("/restaurant")
						}
					})
					.catch((err) => {
						alert(err.message)
					})
			} else {
				axios(`${process.env.REACT_APP_BASE_URL}manager/signin`, {
					method: "POST",
					data: {
						"username": username,
						"password": password
					}
				})
					.then((res) => {
						// console.log(res.data)
						if (!res.data.error) {
							localStorage.setItem('token', res.data.token)
							localStorage.setItem('role', "manager")
							alert(res.data.message)
							navigate("/restaurant")
						}
					})
					.catch((err) => {
						alert(err.message)
					})
			}
		} catch (error) {
			// alert(error.message)
		}
	}
	return (
		<Layout navbar={false}>
			<div className='h-screen w-screen flex items-center justify-center'>
				<div className='w-[40%] flex flex-col items-center mb-20'>
					<img src="/assets/logo.png" alt="" />
					<form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-y-3'>
						<Select options={[{ label: "Admin", value: "admin" }, { label: "Manager", value: "manager" }]} value={type} label={"Role"} onChange={(e) => { setType(e.target.value) }} placeholder={"Enter your type"} />
						<Input value={username} label={"Username"} onChange={(e) => { setUsername(e.target.value) }} placeholder={"Enter your username"} />
						<Input value={password} onChange={(e) => { setPassword(e.target.value) }} label={"Password"} placeholder={"Enter your password"} type={"password"} />
						<Button type={"submit"} text={"Login"} className={"mt-3"} />
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default SignIn
