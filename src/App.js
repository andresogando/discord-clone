import React, { useEffect } from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Chat from './Chat';
import {selectUser} from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import {login, logout} from './features/userSlice';




function App() {
const dispatch = useDispatch();
const user = useSelector(selectUser);

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser){
      // THE USER IS LOGGED IN
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      }))
    }else{
      //THE USER IS LOGGED OUT
      dispatch(logout());
    }
  })
}, [dispatch])


  return (


    <div className="app">
      {user ? (
        <>
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />

        </>
      ):(
        <Login />
      )}
       

    </div>
  );
}

export default App;



