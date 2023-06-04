import './App.css';
import Header from './components/header';
import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Landingpage from './components/landingpage';
import Mainpage from './components/Mainpage';

function App() {


  return (
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>

  );
}

export default App;
