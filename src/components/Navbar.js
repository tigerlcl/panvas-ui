import React from 'react';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

function Navbar() {
  return (
    <Box bg="white" px={4} py={2} shadow="sm">
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Heading
          as={RouterLink}
          to="/"
          size="lg"
          color="blue.500"
          _hover={{ textDecoration: 'none' }}
        >
          Panvas
        </Heading>
        <Flex gap={4}>
          <MotionButton
            as={RouterLink}
            to="/browse"
            variant="ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Papers
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/community"
            variant="ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Community
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/signin"
            colorScheme="blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </MotionButton>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar; 