import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

export const Context = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {}, () => {
    const data = localStorage.getItem("X-DATA");
    return data ? JSON.parse(data) : {};
  });

  useEffect(() => {
    localStorage.setItem("X-DATA", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateProvider;
