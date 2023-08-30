import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/sign-up';
import './App.css';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<SignUp />} path='/' />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
