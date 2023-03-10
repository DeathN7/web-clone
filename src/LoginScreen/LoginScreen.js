import React, { useRef } from 'react';
import { auth, GoogleAuthProvider } from '../firebase';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './LoginScreen.css';

function LoginScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate(); // sử dụng useNavigate

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='loginScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>

        <button type='button' onClick={signInWithGoogle}>
          Sign In with Google
        </button>

        <h4>
          <span className='loginScreen_gray'>New to Netflix? </span>
          <span className='loginScreen_link' onClick={() => navigate('/signup')}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default LoginScreen;
