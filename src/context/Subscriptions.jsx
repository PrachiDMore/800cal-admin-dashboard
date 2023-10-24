import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const SubscriptionContext = createContext()

export const SubscriptionContextProvider = ({ children }) => {
	const [subscriptions, setSubscriptions] = useState([]);
	useEffect(() => {
		try {
			axios(`${process.env.REACT_APP_BASE_URL}order/category/all`, {
				method: "GET",
			})
				.then((res) => {
					setSubscriptions(res.data.subscriptions)
				})
		} catch (error) {

		}
	}, []);
	return <SubscriptionContext.Provider value={{ subscriptions }}>
		{children}
	</SubscriptionContext.Provider>
}

export const UseSubscriptionContext = () => {
	return useContext(SubscriptionContext)
}