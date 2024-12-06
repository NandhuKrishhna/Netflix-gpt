import React, { useState, useEffect } from "react";
import { NETFLIX_LOGO_URL, USER_LOGO_URL } from "../utils/constants";
import { FaSearch, FaBell, FaCaretDown, FaBars } from "react-icons/fa";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribed();
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-8 py-4 text-white ${
        isLoggedIn ? "bg-black" : ""
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 sm:gap-8">
        <img className="w-28 sm:w-[148px]" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />

        {isLoggedIn && (
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">TV Shows</li>
              <li className="hover:underline cursor-pointer">Movies</li>
              <li className="hover:underline cursor-pointer">New & Popular</li>
              <li className="hover:underline cursor-pointer">My List</li>
              <li className="hover:underline cursor-pointer">Browse by Languages</li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      {isLoggedIn && (
        <div className="lg:hidden">
          <FaBars className="text-lg cursor-pointer" onClick={toggleMenu} />
          {menuOpen && (
            <div className="absolute top-full left-0 bg-black w-full text-white z-30">
              <ul className="flex flex-col space-y-4 py-4 px-6 text-sm font-medium">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">TV Shows</li>
                <li className="hover:underline cursor-pointer">Movies</li>
                <li className="hover:underline cursor-pointer">New & Popular</li>
                <li className="hover:underline cursor-pointer">My List</li>
                <li className="hover:underline cursor-pointer">Browse by Languages</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Right Section */}
      {isLoggedIn && (
        <div className="flex items-center gap-4 relative z-10">
          <FaSearch className="cursor-pointer text-lg hidden sm:block" />
          <FaBell className="cursor-pointer text-lg hidden sm:block" />

          <div className="flex items-center relative">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <img className="rounded-md" src={USER_LOGO_URL} alt="user_logo" />
            </div>
            <FaCaretDown
              className="cursor-pointer text-lg text-white ml-2 mt-2"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-black text-white rounded-md shadow-lg w-48 p-2 z-20">
                <ul className="space-y-2 text-sm">
                  <li
                    onClick={handleSignOut}
                    className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
                  >
                    Sign out of Netflix
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
