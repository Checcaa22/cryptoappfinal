import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Favourite } from './pages/Favourite';
import Navbar from './components/Navbar';
import { Contact } from './pages/Contact/Contact';
import {CreditCardForm} from './pages/CreditCardForm'

function App() {

  return (
   <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<CreditCardForm />} />
    </Routes>
    </BrowserRouter>
   </>
  );

  }

export default App;
