import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseGlobalContext } from "../context/Global";

const ProgramContext = createContext();

const ProgramContextProvider = ({ children }) => {
	const { token } = UseGlobalContext()
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		if (token) {
			axios(`${process.env.REACT_APP_BASE_URL}program`)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.message);
					} else {
						setPrograms(res.data.program)
					}
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}, [token])

	return <ProgramContext.Provider value={{ programs, setPrograms }}>
		{children}
	</ProgramContext.Provider>
}

const UseProgramContext = () => {
	return useContext(ProgramContext);
}

export { ProgramContextProvider, UseProgramContext };