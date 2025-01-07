import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import BrowsePapers from './pages/BrowsePapers';
import Community from './pages/Community';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "side main"`,
        }}
        gridTemplateRows={{ base: 'auto 1fr', lg: 'auto 1fr' }}
        gridTemplateColumns={{ base: '1fr', lg: '250px 1fr' }}
        flex="1"
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="side" display={{ base: 'none', lg: 'block' }}>
          <Sidebar />
        </GridItem>
        <GridItem area="main" p={4} overflowY="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowsePapers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default App; 