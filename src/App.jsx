import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/register" Component={RegisterPage} />
                <Route path="*" Component={HomeScreen} />
            </Routes>
        </Router>
    );
}

export default App;
