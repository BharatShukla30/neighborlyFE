import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import store from "./redux/store"
import './App.css'
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { loadUser } from './redux/actions/authActions';
import ProtectedRoute from './components/ProtectedRoute';
import Error404Boundary from './pages/404ErrorBoundary';

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
 
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path='/'  element={<Home/>} />
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='*' element={<Error404Boundary />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App