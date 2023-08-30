import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import Tickets from './pages/tickets';
import CheckEmail from './pages/sign-up/check-email';
import './App.css';

function App() {
    const [selectedTab, setSelectedTab] = useState('');
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SignUp />} path="/sign-up" />
                <Route element={<SignIn />} path="/sign-in" />
              <Route
                    element={
                        <Layout selectedTab={selectedTab} setSelectedTab={(e) => setSelectedTab(e)}>
                            <Tickets />
                        </Layout>
                    }
                    path="/tickets"
                />
        <Route element={<CheckEmail />} path="/check-email" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
