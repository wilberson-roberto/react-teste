import './App.css';
import React from 'react';
import ComponentePrincipal from './components/ComponentePrincipal'
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';

function App() {
  return (
    <>
      <Header/>
      <ComponentePrincipal/>
      <Footer valor='1'>
        Recode 2022
      </Footer>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
