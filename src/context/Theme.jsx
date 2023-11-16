import { createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

	const selectTheme = {
		control: (styles, { isFocused }) => {
			return ({ ...styles, backgroundColor: '#252525', padding: "0.43rem", boxShadow: isFocused ? `0 4px 6px -1px rgba(28 195 122, 0.45), 0 2px 4px -2px rgba(28 195 122 0.45)` : `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, borderRadius: "0.375rem", border: `1px solid rgb(229, 231, 235)`, color: "#fff" })
		},
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isFocused ? 'rgba(28, 195, 122, 0.4)' : "#fff",
				color: '#000',
			};
		},
		theme: (theme) => ({
			...theme,
			borderRadius: 0,
			colors: {
				...theme.colors,
				primary25: 'green',
				primary: '#fff',
			},
		})
	}

	return <ThemeContext.Provider value={{ selectTheme }}>
		{children}
	</ThemeContext.Provider>
}

const UseThemeContext = () => {
	return useContext(ThemeContext)
}

export { ThemeContextProvider, UseThemeContext };