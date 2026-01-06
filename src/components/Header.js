import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  Netflix_Logo, SUPPORTED_LANGUAGE, User_Icon } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // const [menuOpen, setMenuOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

 return (
   
    <div className="absolute w-screen md:px-4 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
       <div className="flex items-center space-x-8">
        <img  className="w-40 p-3"
        src={Netflix_Logo} 
        alt="logo" /> 
          {user && (
         <ul className='flex space-x-6 text-gray-200 font-bold cursor-pointer '>
                <li className='p-2'>Home</li>
                <li className='p-2'>shows</li>
                <li className='p-2'>Movies</li>
                <li className='p-2'>Games</li>
                <li className='p-2'>New&Popular</li>
                <li className='p-2'>MyList</li>
      
              </ul>
                )}      </div>

     {user && (
           <div className="flex p-2">
          
          {showGptSearch && (
            <select className='py-2 px-4 m-2 bg-gray-900 rounded-lg text-white' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGE.map(lang=> 
                <option key={lang.identifier} value={lang.identifier}>{lang.name}

                </option>)}
                </select>
              )}
           <button  onClick={handleGptSearchClick}
      className="md:font-bold py-4 px-8 text-white bg-purple-700 mx-4 my-2 rounded-lg "
      >{showGptSearch ? "Home Page" : "GPT-Search"}</button>   
       <img
            className="w-12 h-12 md:w-12 md:h-12"
            alt="usericon"
            src={User_Icon} />
      <button onClick={handleSignOut}
      className="md:font-bold text-xs text-white bg-red-500 w-22 h-10 md:w-20 md:h-12 p-2 m-2 rounded-lg">
      Sign Out</button>
    </div>
    )}
    </div>
  )
}

export default Header
