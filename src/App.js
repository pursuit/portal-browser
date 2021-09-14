import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import RegisterButton from './components/RegisterButton';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <RegisterButton />
      <LoginButton />
      <Profile />
    </>
  );
}

export default App;
