import { createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	const navigate = useNavigate()
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			// navigate("/restaurant")
		} else {
			navigate("/")
		}
	}, []);
	return <GlobalContext.Provider>
		{children}
	</GlobalContext.Provider>
}

export const UseGlobalContext = () => {
	return useContext(GlobalContext)
}