import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../context/Context";

const Search = () => {
  const { setInput } = useContext(SearchContext);

  return (
    <section className="search">
      <form action="">
        <input
          type="text"
          placeholder="Search movie title ..."
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
