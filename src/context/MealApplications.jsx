import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseGlobalContext } from "./Global";

const MealApplicationContext = createContext();

const MealApplicationContextProvider = ({ children }) => {
	const { token } = UseGlobalContext()
	const [applications, setApplications] = useState([]);

	useEffect(() => {
		if (token) {
			axios(`${process.env.REACT_APP_BASE_URL}meal-application`, {
				method: "GET"
			})
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message);
					} else {
						setApplications(res.data.info)
					}
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [token])

	return <MealApplicationContext.Provider value={{ applications }}>
		{children}
	</MealApplicationContext.Provider>
}

const UseMealApplicationContext = () => {
	return useContext(MealApplicationContext);
}

export { MealApplicationContextProvider, UseMealApplicationContext };