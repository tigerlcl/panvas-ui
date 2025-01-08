import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowsePapers from './pages/BrowsePapers';
import Community from './pages/Community';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Box as="header" flexShrink={0}>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box as="main" flex={1} py={8}>
        <Container maxW="container.xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowsePapers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" flexShrink={0}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App; 