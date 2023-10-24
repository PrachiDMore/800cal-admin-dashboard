import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const OrderContext = createContext()

export const OrderContextProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		try {
			axios(`${process.env.REACT_APP_BASE_URL}calendar/all`, {
				method: "GET",
			})
				.then((res) => {
					console.log(res.data)
					setOrders(res.data.calendar)
				})
		} catch (error) {

		}
	}, []);
	return <OrderContext.Provider value={{ orders }}>
		{children}
	</OrderContext.Provider>
}

export const UseOrderContext = () => {
	return useContext(OrderContext)
}