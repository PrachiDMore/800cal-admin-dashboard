"use client";

import { createContext, useContext, useEffect, useState } from "react"

const SubscriptionContext = createContext()

export const SubscriptionContextProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		try {
			axios("https://800cal-backend.vercel.app/order/category/all", {
				method: "GET",
			})
				.then((res) => {
					console.log(res)
					setOrders(res.data.subscriptions)
				})
		} catch (error) {

		}
	}, []);
	return <SubscriptionContext.Provider value={{ orders }}>
		{children}
	</SubscriptionContext.Provider>
}

export const UseSubscriptionContext = () => {
	return useContext(SubscriptionContext)
}