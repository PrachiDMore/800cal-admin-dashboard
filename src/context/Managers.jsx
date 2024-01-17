import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { UseGlobalContext } from "./Global";

const ManagerContext = createContext()

export const ManagerContextProvider = ({ children }) => {
	const { token } = UseGlobalContext()
	const [managers, setManagers] = useState([]);
	useEffect(() => {
		if (token) {
			try {
				axios(`${process.env.REACT_APP_BASE_URL}manager`, {
					method: "GET",
				})
					.then((res) => {
						setManagers(res.data.managers)
					})
			} catch (error) {

			}
		}
	}, [token]);
	return <ManagerContext.Provider value={{ managers }}>
		{children}
	</ManagerContext.Provider>
}

export const UseManagerContext = () => {
	return useContext(ManagerContext)
}