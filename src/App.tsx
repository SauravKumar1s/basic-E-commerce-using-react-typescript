import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';


import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import './App.css';
import News from './pages/News';
import Register from './pages/Register';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navigation />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
