import "./App.scss";
import MovieDatabase from "./pages/MovieDatabase";
import Header from "./components/Header";
import { SearchContext, SortContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [sortOption, setSortOption] = useState("");
  console.log({ sortOption });

  const [input, setInput] = useState("");
  console.log({ input });

  return (
    <>
      <SortContext.Provider value={{ sortOption, setSortOption }}>
        <SearchContext.Provider value={{ input, setInput }}>
          <Header />
          <MovieDatabase />
        </SearchContext.Provider>
      </SortContext.Provider>
    </>
  );
}

export default App;
