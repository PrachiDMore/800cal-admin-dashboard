import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { UseGlobalContext } from "./Global";

const SubscriptionContext = createContext()

export const SubscriptionContextProvider = ({ children }) => {
	const { token } = UseGlobalContext();
	const [subscriptions, setSubscriptions] = useState([]);
	useEffect(() => {
		if (token) {
			try {
				axios(`${process.env.REACT_APP_BASE_URL}order/category/all`, {
					method: "GET",
				})
					.then((res) => {
						setSubscriptions(res.data.subscriptions)
					})
			} catch (error) {

			}
		}
	}, [token]);
	return <SubscriptionContext.Provider value={{ subscriptions }}>
		{children}
	</SubscriptionContext.Provider>
}

export const UseSubscriptionContext = () => {
	return useContext(SubscriptionContext)
}