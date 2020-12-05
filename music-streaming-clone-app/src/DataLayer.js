import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  //{children} prop is the component that is wrapped insed the <DataLayer> i.e. <App/>
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//gets values from data-layer at any given point in time
export const useDataLayerValue = () => useContext(DataLayerContext);
