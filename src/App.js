import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Pokemon';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pokemon' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
