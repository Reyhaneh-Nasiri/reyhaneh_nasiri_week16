import cities from "../../data/cities.json";

import { createContext, useReducer } from "react";
export const SearchContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.payload;
    case "CLEAR_SEARCH":
      return "";
    default:
      throw new Error("Invalid Action");
  }
};


const SearchProvider = ({children}) => {
      const [search, dispatch] = useReducer(reducer, "");
    
  return (
          <SearchContext.Provider value={{ search, dispatch, cities }}>
            {children}
          </SearchContext.Provider>
  )
}

export default SearchProvider