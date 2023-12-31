import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { UseGlobalContext } from "./Global";

const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
	const { token } = UseGlobalContext()
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		if (token) {
			axios(`${process.env.REACT_APP_BASE_URL}restaurant/all`)
				.then((res) => {
					console.log(res.data)
					setRestaurants(res.data.restaurants)
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [token]);
	return <RestaurantContext.Provider value={{ restaurants }}>
		{children}
	</RestaurantContext.Provider>
}

export const UseRestaurantContext = () => {
	return useContext(RestaurantContext)
}