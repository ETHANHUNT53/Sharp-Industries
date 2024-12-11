// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Box from '@mui/material/Box';
// import Shery from "sheryjs";


const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh' 
          }}
        >
          <Header />
          <Box sx={{ flex: '1 0 auto', paddingBottom: '50px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Footer />
          </Box>
          <FloatingButtons />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;