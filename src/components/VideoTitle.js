import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="absolute flex flex-col items-start text-white space-y-4 px-4 sm:px-6"
      style={{
        top: "20%", 
        left: "5%",
        maxWidth: "90%",
        zIndex: 10,
      }}
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words max-w-[80%] md:max-w-[60%]">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none max-w-[80%] md:max-w-[60%]">
        {overview}
      </p>
      <div className="flex flex-wrap space-x-2 sm:space-x-4">
        <button className="flex items-center bg-white text-black font-bold py-2 px-4 sm:px-6 rounded shadow hover:bg-gray-300 transition">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:px-6 rounded shadow transition">
          <AiOutlineInfoCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
