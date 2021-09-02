import React from 'react';

const Profile = () => {
  let isAuthenticated = false;

  return (
    isAuthenticated && ( 
     <div>
        <p>Hi, </p>
      </div>
    )
  )
}

export default Profile
