import React, { useState } from 'react'
import Header from './Header'
import { Netflix_bg_Logo } from '../Utils/constants'
import { checkValidateData } from '../Utils/validate'
import { useRef } from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import {User_Icon} from "../Utils/constants";


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState();
   const [errorMessage, setErrorMessage] = useState()
   const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
     const name = useRef(null);
    // console.log(email.current.value);


    const toggleSignForm =() =>{
        setIsSignInForm(!isSignInForm);
    };
    const  handleButtonClick = () =>{
        // Validate the Form Data
const message = checkValidateData(email.current.value, password.current.value);

  setErrorMessage(message);

  if(message) return
//   SignIn SignUp Logic

if(!isSignInForm){
    // SignUp Logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    updateProfile(user, {
  displayName: name.current.value,
   photoURL: User_Icon,
}).then(() => {

   const {uid, email, displayName, photoURL} = auth.currentUser;
                console.log(user.photoURL);
                 dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }),
         )
.catch((error) => {
  setErrorMessage(error.message);
  });
  
   
    // ...
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
})
  }
  else{
    //sign in loigc..
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });



}


        
        console.log(email.current.value)
        //  console.log(name.current.value)
       
       
    }



  return (
    <div>
        <Header />
     <div className="absolute">
            <img className='h-screen md:w-screen object-cover'
            src={Netflix_bg_Logo} alt="bg-image" />
            </div>
           <form onSubmit={(e) => e.preventDefault()}
           className=' md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-90 text-white'>
            <h1 className='text-white cursor-pointer font-bold text-3xl py-2 m-4 w-full'>
                {isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
                <input ref={name}
            className='w-full py-2 px-6 my-4 rounded-sm bg-gray-700'
            type="text" placeholder='Please Enter your full name:' />)}

            <input ref={email}
            className='w-full py-2 px-6 my-4 rounded-sm bg-gray-700'
            type="text" placeholder='Please Enter email id' />
            <input ref={password}
            className='w-full py-2 px-6 my-4 rounded-sm bg-gray-700'
            type="password" placeholder='enter Password' />
          <p  className='text-red-500'>{errorMessage}</p>
            <button onClick={handleButtonClick}
            className='w-full px-4 py-2 rounded-sm my-4 bg-red-700 '>
              {isSignInForm? "Sign In" : "Sign-Up"}
            </button>
            
            <div className='text-center'>
            <h2 className='w-full mx-auto justify-center px-4 py-2'>OR</h2>  
            </div>     
           
            <p onClick={toggleSignForm}
            className='w-full py-2 px-6 my-2 cursor-pointer rounded-sm bg-gray-900'>{!isSignInForm ? "registered please Login": "NewNetflix? SignUP"}</p>
           </form>

        </div>
   
  )
}

export default Login