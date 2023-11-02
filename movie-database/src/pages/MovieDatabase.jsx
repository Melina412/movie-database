import movies from "../assets/data";
import MovieCard from "../components/MovieCard";
import { useContext, useEffect, useState } from "react";
import { SortContext, SearchContext } from "../context/Context";

const MovieDatabase = () => {
  const { sortOption } = useContext(SortContext);
  const { input } = useContext(SearchContext);

  // console.log({ sortOption });

  const [movieSorting, setMovieSorting] = useState([]);

  const sortLogic = (option) => {
    const moviesCopy = [...movies]; // erstellt eine kopie des arrays

    if (option === "a-z") {
      // alphabetischer index aufsteigend
      moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "z-a") {
      // alphabetischer index absteigend
      moviesCopy.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "old") {
      // jahr aufsteigend
      moviesCopy.sort((a, b) => a.year - b.year);
    } else if (option === "new") {
      // jahr absteigend
      moviesCopy.sort((a, b) => b.year - a.year);
    } else if (option === "rate") {
      // rating absteigend
      moviesCopy.sort((a, b) => b.rate - a.rate);
    }
    // localeCompare() = automatische indizierung der buchstaben *siehe unten

    setMovieSorting(moviesCopy);
  };

  useEffect(() => {
    sortLogic(sortOption);
  }, [sortOption]);

  // erst mal nur um sortierung in der konsole zu zeigen
  useEffect(() => {
    // console.log({ movies });
    console.log({ movieSorting });
  }, [movieSorting]);

  // * filter *****************************************+**********************************************

  const [movieTitle, setMovieTitle] = useState();

  useEffect(() => {
    const moviesCopy = [...movies];
    setMovieTitle(
      moviesCopy.filter((element) => {
        return element.title.toLowerCase() === input.toLowerCase();
      })
    );
    console.log({ movieTitle });
  }, [input]);

  return (
    <main>
      <section className="movie-gallery">
        {input
          ? movieTitle.map((item, index) => (
              <MovieCard key={index} movie={item} />
            ))
          : movieSorting.map((item, index) => (
              <MovieCard key={index} movie={item} />
            ))}
        ;
      </section>
    </main>
  );
};

export default MovieDatabase;

// Logik von localeCompare():

// a.localeCompare(b); // -> -1
// b.localeCompare(a); // -> 1
// a.localeCompare(a); // -> 0
