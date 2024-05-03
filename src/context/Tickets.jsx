import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UseGlobalContext } from "./Global";

const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
  const { token } = UseGlobalContext();
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    if (token) {
      try {
        axios(`${process.env.REACT_APP_BASE_URL}tickets`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          setTickets(res.data.tickets);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

  return (
    <TicketContext.Provider value={{ tickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export const UseTicketContext = () => {
  return useContext(TicketContext);
};
