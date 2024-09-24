import React from 'react';
import { useAuth } from '../../Components/Blog/AuthContext'; // Adjust the import path accordingly
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';

const BlogLogin = () => {
  const { setIsAuth } = useAuth();
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
      })
      .catch((error) => {
        console.log('Sign-in error:', error);
      });
      navigate("/blog")
  };

  return (
    <div className='mx-auto md:w-[30%] mt-10 shadow-md flex flex-col flex-auto gap-4 p-4 w-full'>
      <p className='text-gray-500'>Sign In with Google to Continue</p>
      <button
        onClick={signInWithGoogle}
        className='border bg-gray-500 rounded-md p-1 text-sm text-gray-200 hover:opacity-45'
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default BlogLogin;
