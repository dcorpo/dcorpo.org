import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SignIn, SignUp } from "./pages/LoginPage";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sign_in' element={<SignIn />} />
                    <Route path='/sign_up' element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}
