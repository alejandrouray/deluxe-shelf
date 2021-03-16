import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  page: "Deluxe Shelf",
  modal: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
export default Store;
