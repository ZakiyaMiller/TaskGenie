import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Login</h2>
      <h5 className='leftalign'>Welcome! Please log in to access the application.</h5>
      <h5 className='button'><button onClick={() => loginWithRedirect()}>Log In</button></h5>
    </div>
  );
};

export default Login;
