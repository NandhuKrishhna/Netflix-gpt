import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-32 sm:w-40 md:w-48">
      {/* Ensure the image is responsive */}
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={IMG_CDN_URL + poster_path}
        alt="MovieCard"
      />
    </div>
  );
};

export default MovieCard;
