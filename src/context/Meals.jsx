import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseGlobalContext } from "./Global";

const MealsContext = createContext();

const MealsContextProvider = ({ children }) => {
	const { token } = UseGlobalContext()
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		if (token) {
			axios(`${process.env.REACT_APP_BASE_URL}meal`)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message);
					} else {
						setMeals(res.data.meal)
					}
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [token])

	return <MealsContext.Provider value={{ meals, setMeals }}>
		{children}
	</MealsContext.Provider>
}

const UseMealsContext = () => {
	return useContext(MealsContext);
}

export { MealsContextProvider, UseMealsContext };