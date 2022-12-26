import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './pages/Watch';
import Home from './pages/Home';
import Search from './pages/Search';

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/watch/:id" element={<Watch />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Router>
  )
}