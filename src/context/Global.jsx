import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	const navigate = useNavigate()
	const [token, setToken] = useState("")
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			// navigate("/restaurant")
			setToken(token)
		} else {
			navigate("/")
		}
	}, []);
	return <GlobalContext.Provider value={{ token }}>
		{children}
	</GlobalContext.Provider>
}

export const UseGlobalContext = () => {
	return useContext(GlobalContext)
}