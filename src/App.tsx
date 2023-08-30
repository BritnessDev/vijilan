import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SignUp />} path="/sign-up" />
                <Route element={<SignIn />} path="/sign-in" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
