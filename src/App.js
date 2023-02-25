import React, { useState } from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/DashBoard";

export const GlobalContext = React.createContext();

const App = () => {
    const [globalState, setGlobalState] = useState();
    return (
        <GlobalContext.Provider value={{globalState, setGlobalState}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" exact element={<SignUpPage />} />
                    <Route path="/signin" exact element={<SignInPage />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;