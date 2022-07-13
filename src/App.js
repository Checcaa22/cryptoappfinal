import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Favourite } from './pages/Favourite';
import Navbar from './components/Navbar';
function App() {

  return (
   <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
    </BrowserRouter>
   </>
  );

  }

export default App;
