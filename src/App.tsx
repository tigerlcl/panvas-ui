import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar />
      <Grid
        templateColumns={{ base: '1fr', md: '240px 1fr' }}
        gap={6}
        px={4}
        py={8}
        maxW="container.xl"
        mx="auto"
      >
        <GridItem display={{ base: 'none', md: 'block' }}>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App
