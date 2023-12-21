import React, { } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import store from "./redux/store"

import './App.css'
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { loadUser } from './redux/actions/authActions';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      <Footer />

      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
