import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import './App.css'
import { AuthProvider } from './context/AuthContext';
import Login from './screens/Login';

const App = () => {
  return (
    <div className='App'>
      <AuthProvider>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     
     </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  )
}

export default App
