import CityInput from "./components/CityInput";
import SearchProvider from "./components/context/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <CityInput />
    </SearchProvider>
  );
};

export default App;
