import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowsePapers from './pages/BrowsePapers';
import Community from './pages/Community';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Team from './pages/Team';
import PaperPoint from './pages/PaperPoint';

// Import placeholder components for new routes
const HelpWanted = () => <Box p={8}>Help Wanted Zone - Coming Soon</Box>;
const Carnival = () => <Box p={8}>Carnival - Coming Soon</Box>;
const Blogs = () => <Box p={8}>Blogs - Coming Soon</Box>;
const FAQs = () => <Box p={8}>FAQs - Coming Soon</Box>;

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
            
            {/* New Routes */}
            <Route path="/team" element={<Team />} />
            <Route path="/help-wanted" element={<HelpWanted />} />
            <Route path="/carnival" element={<Carnival />} />
            <Route path="/paperpoint" element={<PaperPoint />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faqs" element={<FAQs />} />
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