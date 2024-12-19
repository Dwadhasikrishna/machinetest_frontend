import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ListStudentDetails from './components/ListStudentDetails'; // Import your list page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/list-student-details" element={<ListStudentDetails />} />
            </Routes>
        </Router>
    );
}

export default App;

