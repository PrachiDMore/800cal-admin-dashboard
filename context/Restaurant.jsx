import { createContext, useContext, useEffect } from "react"

const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {
	return <RestaurantContext.Provider>
		{children}
	</RestaurantContext.Provider>
}

export const UseRestaurantContext = () => {
	return useContext(RestaurantContext)
}