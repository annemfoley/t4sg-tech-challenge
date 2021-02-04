import './App.css';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

import GeneralHomepage from './views/GeneralHomepage'
import UserHomepage from './views/UserHomepage'


function App() {
  return (
    <>
    <LoginButton/>
    <Profile/>
    <LogoutButton/>
  
    <GeneralHomepage/>
    <UserHomepage/>
    </>
  );
}

export default App;
