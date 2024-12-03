import React from "react";
import Header from "./Header";
import { LOGIN_BG_IMG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LOGIN_BG_IMG_URL})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <Header />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[450px] max-h-[735px] w-full h-full space-y-6 bg-black bg-opacity-80 px-[68px] py-[48px] rounded-sm mt-6 box-border">
        <h1 className="text-4xl text-white font-bold">Sign In</h1>

        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 bg-[#101011] bg-opacity-60 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-[#101011] bg-opacity-60 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-[#c11119] text-white font-bold rounded-sm hover:bg-red-700 transition"
        >
          Sign In
        </button>
        <div className="text-white opacity-70 text-center">
          <h2>OR</h2>
        </div>
        <button className="text-white font-bold w-full p-2 bg-[#919191] rounded-sm bg-opacity-40 ">
          Use a sign-in code
        </button>
        <div className="text-center">
          <a href="/forgot-password" className="text-white hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-white">
          <span className="text-gray-400">New to Netflix? </span>
          <a href="/signup" className="text-white font-semibold hover:underline">
            Sign up now.
          </a>
        </div>
        <p className="text-gray-400 text-sm ">
        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-700">
          Learn more.
        </span>
        </p>

       
      </form>
    </div>
  );
};

export default Login;
