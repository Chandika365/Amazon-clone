import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const UseStateValue = () => useContext(StateContext);

// this is copy paste one
// this part use for context api and use to connect datalayer
//prepares the datalayer
//wrap our app and provide the data layer
//pull information from the data layer
