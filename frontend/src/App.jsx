import React, { useEffect } from 'react';

import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

import {Routes, Route, Navigate} from "react-router-dom";
import { axiosInstance } from './lib/axios';
import {useAuthStore} from "./store/useAuthStore"

import {Loader} from "lucide-react";
import {Toaster} from "react-hot-toast";

const App = () => {
  // axiosInstance.get
    const {authUser, checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();

    console.log("ONLINE USERS ", onlineUsers);

    useEffect(()=>{
      checkAuth();
    }, [checkAuth]);

    console.log({authUser});

    // if(isCheckingAuth && !authUser) return(
    //   <div className='flex items-center justify-center h-screen'>
    //     <Loader className="size-10 animate-spin"/>
    //   </div>
    // )
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ? <LogInPage /> : <Navigate to="/" />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
      
    </div>
  )
}

export default App;
