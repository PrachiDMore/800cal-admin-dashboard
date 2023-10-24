import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	
	useEffect(() => {
		axios('https://800cal-backend.vercel.app/restaurant/all')
			.then((res) => {
				setRestaurants(res.data.restaurants)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, []);
	return <RestaurantContext.Provider value={{ restaurants }}>
		{children}
	</RestaurantContext.Provider>
}

export const UseRestaurantContext = () => {
	return useContext(RestaurantContext)
}