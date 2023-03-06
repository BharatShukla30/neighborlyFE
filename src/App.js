import React, { useState } from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/DashBoard";
import { useSelector } from "react-redux";

const userSelector = (state) => state.userReducer;
const signInSelector = (state) => state.signInReducer;

const App = () => {
    const userReducerState = useSelector(userSelector);
    const signInReducerState = useSelector(signInSelector);

    return (
        <>
            {(!userReducerState.self.success || !signInReducerState.payload) && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" exact element={<SignUpPage />} />
                <Route path="/signin" exact element={<SignInPage />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;