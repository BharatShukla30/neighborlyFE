import React from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import SignInPage from "./components/SignInPage";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" exact element={<SignUpPage />} />
                    <Route path="/signin" exact element={<SignInPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;