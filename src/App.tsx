import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import CheckEmail from './pages/sign-up/check-email';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SignUp />} path="/" />
                <Route element={<CheckEmail />} path="/check-email" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;