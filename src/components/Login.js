import React, { useState, useRef } from "react";
import Header from "./Header";
import { LOGIN_BG_IMG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInFrom, setIsSignFrom] = useState(false); 
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // toggle function to change from Sign In => Sign Up vice versa
  const tooglesignInForm = () => {
    setIsSignFrom(!isSignInFrom);
  };

  // To get the email and password and calling validation function
  const handleButtonClick = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);

    const message = checkValidData(emailValue, passwordValue);
    console.log("Validation result:", message);
    setErrorMessage(message);

    if (message) {
      console.log("Validation failed.");
      return;
    }

    if (!isSignInFrom) {
      console.log("Signing up...");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user  = userCredential.user;
          // console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          navigate("/")
        });
    } else {

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} - ${errorMessage}`)
        navigate("/")
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LOGIN_BG_IMG_URL})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <Header isLoggedIn={false} />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[450px] space-y-6 bg-black bg-opacity-80 px-[68px] py-[48px] rounded-sm mt-6 box-border"
        >
          <h1 className="text-4xl text-white font-bold">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>

          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 bg-[#101011] bg-opacity-60 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="relative">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 bg-[#101011] bg-opacity-60 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <p className="text-red-800 font-bold">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="w-full p-3 bg-[#c11119] text-white font-bold rounded-sm hover:bg-red-700 transition"
          >
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white opacity-70 text-center">
            <h2>OR</h2>
          </div>
          <button className="text-white font-bold w-full p-2 bg-[#919191] rounded-sm bg-opacity-40">
            Use a sign-in code
          </button>
          <div className="text-center">
            <a href="/forgot-password" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-white flex gap-1 ">
            <p className="text-gray-400">
              {isSignInFrom ? "New to Netflix" : "Already registered?"}
            </p>
            <p
              onClick={tooglesignInForm}
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              {isSignInFrom ? "Sign Up Now" : "Sign In Now"}
            </p>
          </div>
          <p className="text-gray-400 text-sm ">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span className="text-blue-700">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login;

