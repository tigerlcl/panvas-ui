import { Box, Flex, Button, Heading, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box px={4} py={4} bg="white" boxShadow="sm">
      <Flex maxW="container.xl" mx="auto" align="center">
        <Link to="/">
          <Heading size="lg" color="blue.600">Panvas</Heading>
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Button variant="ghost">Browse Papers</Button>
          <Button variant="ghost">Community</Button>
          <Button colorScheme="blue">Sign In</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 