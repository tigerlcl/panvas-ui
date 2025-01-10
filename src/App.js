import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, Footer, SignIn, AboutUs } from './components';
import { Homepage, RoomCredit, Settings, Wallet } from './pages/demo-user';
import { PaperPoint, Blogs, FAQs } from './pages/resources';
import { Square, PreviewSpace, ConsultingRoom, Carnival } from './pages/solutions';
import { SpacePaper } from './pages/examples';

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
            <Route path="/preview" element={<PreviewSpace />} />
            <Route path="/square" element={<Square />} />
            <Route path="/consulting" element={<ConsultingRoom />} />
            <Route path="/carnival" element={<Carnival />} />
            
            {/* Resource Section */}
            <Route path="/paperpoint" element={<PaperPoint />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* About Section */}
            <Route path="/about-us" element={<AboutUs />} />
            
            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            
            {/* Demo User */}
            <Route path="/demo-user/homepage" element={<Homepage />} />
            <Route path="/demo-user/room-credit" element={<RoomCredit />} />
            <Route path="/demo-user/settings" element={<Settings />} />
            <Route path="/demo-user/wallet" element={<Wallet />} />

            {/* Examples */}
            <Route path="/space/paper/:id" element={<SpacePaper />} />
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