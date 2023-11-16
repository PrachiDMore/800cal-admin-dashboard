import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const RidersContext = createContext()

export const RidersContextProvider = ({ children }) => {
	const [riders, setRiders] = useState([]);
	useEffect(() => {
		try {
			axios(`${process.env.REACT_APP_BASE_URL}rider/all`, {
				method: "GET",
			})
				.then((res) => {
					setRiders(res.data.riders)
				})
		} catch (error) {

		}
	}, []);
	return <RidersContext.Provider value={{ riders }}>
		{children}
	</RidersContext.Provider>
}

export const UseRidersContext = () => {
	return useContext(RidersContext)
}