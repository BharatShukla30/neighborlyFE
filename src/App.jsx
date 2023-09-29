import React, { } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css'
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      <Footer />

      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
