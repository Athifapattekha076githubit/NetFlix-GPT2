import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Netflix_Logo, SUPPORTED_LANGUAGE, User_Icon } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  const [menuOpen, setMenuOpen] = useState(false); // Mobile nav toggle

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => dispatch(toggleGptSearchView());
  const handleLanguageChange = (e) => dispatch(changeLanguage(e.target.value));

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-black z-50 flex items-center px-4 sm:px-6 md:px-8 justify-between h-10">
  {/* Left: Logo + GPT */}
  <div className="flex items-center space-x-4">
    <img
      className="w-28 sm:w-32 md:w-36 lg:w-44"
      src={Netflix_Logo}
      alt="Netflix Logo"
    />
 
  </div>

  {/* Center / Navigation Links */}
  {user && (
    <ul className={`absolute top-16 left-0 w-[3/4] bg-black md:bg-transparent md:static flex flex-col md:flex-row items-center md:items-center md:space-x-6 lg:space-x-8
      transition-all duration-300 ${menuOpen ? "flex" : "hidden"} md:flex
      text-gray-200 font-bold text-center md:text-left
    `}>
      <li className="p-2 hover:text-white cursor-pointer">Home</li>
      <li className="p-2 hover:text-white cursor-pointer">Shows</li>
      <li className="p-2 hover:text-white cursor-pointer">Movies</li>
      <li className="p-2 hover:text-white cursor-pointer">Games</li>
      <li className="p-2 hover:text-white cursor-pointer">New & Popular</li>
      <li className="p-2 hover:text-white cursor-pointer">MyList</li>
    </ul>
  )}

  {/* Right: Hamburger + User */}
  <div className="flex items-center space-x-4">

    {/* GPT Mobile Toggle */}
    {user && (
      <button
        onClick={handleGptSearchClick}
        className="md:inline-flex px-3 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors md:w-[9rem]"
      >
        {showGptSearch ? "Home Page" : "🔍GPT-Search"}
      </button>
    )}

    {/* User Icon */}
    {user && (
      <img
        src={User_Icon}
        alt="user icon"
        className="w-10 h-10 rounded-lg border-2 border-white object-cover hidden md:inline-flex"
      />
    )}

    {/* Sign Out */}
    {user && (
      <button
        onClick={handleSignOut}
        className="hidden md:inline-flex px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors md:w-28 md:p-2"
      >
        Sign Out
      </button>
    )}

    {/* Hamburger for Mobile */}
    {user && (
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    )}
  </div>

</div>

  );
};

export default Header;