import React from "react";
import Login from "./Login";
import Browrse from "./Browrse";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browrse />,
    },
  ]);

 
  return (
    <div className="bg-black min-h-screen text-white">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
