import { useReducer } from "react";
import CityInput from "./components/CityInput";

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

const App = () => {
  const [search, dispatch] = useReducer(reducer, "");

  return (
    <>
      <CityInput search={search} dispatch={dispatch} />
    </>
  );
};

export default App;
