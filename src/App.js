import './App.css';
import React from 'react';
import ComponentePrincipal from './components/ComponentePrincipal'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <ComponentePrincipal/>
      <Footer valor='1'>
        Recode 2022
      </Footer>
    </>
  );
}

export default App;
