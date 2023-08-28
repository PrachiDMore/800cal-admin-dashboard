"use client";

import Button from '@/components/custom/Button';
import Input from '@/components/custom/Input';
import Layout from '@/components/custom/Layout';
import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			axios("https://800cal-backend.vercel.app/admin/signin", {
				method: "POST",
				data: {
					"username": username,
					"password": password
				}
			})
				.then((res) => {
					if (!res.data.error) {
						localStorage.setItem('token', res.data.token)
						alert(res.data.message)
						window.location.href = "/restaurant"
					}
				})
				.catch((err) => {
					alert(err.message)
				})
		} catch (error) {
			alert(error.message)
		}
	}
	return (
		<Layout navbar={false}>
			<div className='h-screen w-screen flex items-center justify-center'>
				<div className='w-[40%] flex flex-col items-center mb-20'>
					<img src="/assets/logo.png" alt="" />
					<form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-y-3'>
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
