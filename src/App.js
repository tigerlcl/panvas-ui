import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Team from './pages/Team';
import Homepage from './pages/profile/Homepage';
import { PaperPoint, Blogs, FAQs } from './pages/resources';
import { Community, BrowsePapers, HelpWanted, Carnival, PaperDetails } from './pages/solutions';

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
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            
            {/* Service Section */}
            <Route path="/browse" element={<BrowsePapers />} />
            <Route path="/browse/:id" element={<PaperDetails />} />
            <Route path="/community" element={<Community />} />
            <Route path="/help-wanted" element={<HelpWanted />} />
            <Route path="/carnival" element={<Carnival />} />
            
            {/* Resource Section */}
            <Route path="/paperpoint" element={<PaperPoint />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* About Section */}
            <Route path="/team" element={<Team />} />
            
            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            
            {/* Demo User */}
            <Route path="/homepage" element={<Homepage />} />
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