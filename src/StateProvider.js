//set up date leayer
//we need this to track basket

import React, { createContext, useContext, useReducer } from "react"

//this is data leayer
export const StateContext = createContext();

//Bulid Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how we user it inside of component
export const useStateValue = () => useContext(StateContext);
