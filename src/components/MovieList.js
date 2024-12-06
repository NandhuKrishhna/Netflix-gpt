import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies:", movies?.[0]);

  return (
    <div className="w-full mt-16 sm:mt-20"> {/* Add spacing here */}
      {/* Responsive title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium px-4 sm:px-6 py-4">
        {title}
      </h1>
      <div
        className="flex overflow-x-auto gap-4 sm:gap-6 w-full px-4 sm:px-6 scrollbar-hide"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
        {movies?.map((movie) => (
          <div className="flex-shrink-0" key={movie.id}>
            <MovieCard poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
