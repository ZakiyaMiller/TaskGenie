import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          
          <h1>User Profile</h1>
          <h5 className='leftalign'>Name: {user.name}</h5>
          <h5 className='leftalign'>Email: {user.email}</h5>

        </div>
      ) : (
        <div>
         <h2> You need to log in to view your profile.</h2>
         
          </div>
      )}
    </div>
    
  );
};

export default Profile;
