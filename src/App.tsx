import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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