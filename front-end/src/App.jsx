import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import './CSS/style.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mt-4">
          <Routes>
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
