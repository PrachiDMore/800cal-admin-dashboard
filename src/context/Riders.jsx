import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseGlobalContext } from "./Global";

const RidersContext = createContext();

export const RidersContextProvider = ({ children }) => {
  const { token } = UseGlobalContext();
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    if (token) {
      try {
        axios(`${process.env.REACT_APP_BASE_URL}rider/all`, {
          method: "GET",
        }).then((res) => {
          setRiders(res.data.riders);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);
  
  return (
    <RidersContext.Provider value={{ riders }}>
      {children}
    </RidersContext.Provider>
  );
};

export const UseRidersContext = () => {
  return useContext(RidersContext);
};
