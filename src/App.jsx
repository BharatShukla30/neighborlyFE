import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { fetchCitiesList, loadUser } from "./redux/actions/authActions";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404Boundary from "./pages/404ErrorBoundary";
import Profile from "./pages/Profile";
import Location from "./pages/Location";
import Signup from './pages/Signup'
import Login from './pages/Login'
import AboutUs from "./pages/AboutUs";
import ProductDesign from "./pages/ProductDesign";
import Feed from "./pages/Feed";
import Home from "../src/pages/Home.jsx";


function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(fetchCitiesList());
  }, []);

  return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feed" element={<Feed />}/>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="location" element={<Location />} />
          <Route path="*" element={<Error404Boundary />} />
          <Route path='/Signup' element = {<Signup/>}/>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
