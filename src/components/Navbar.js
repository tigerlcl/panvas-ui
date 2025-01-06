import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navGradient = colorMode === 'light'
    ? 'linear(to-r, rgba(255, 246, 183, 0.9), rgba(246, 65, 108, 0.9))'
    : 'linear(to-r, rgba(45, 52, 54, 0.9), rgba(246, 65, 108, 0.9))';

  const logoGradient = colorMode === 'light'
    ? 'linear(to-r, #fff6b7, #f6416c)'
    : 'linear(to-r, #fff6b7, #ff8177)';

  return (
    <Box
      bgGradient={navGradient}
      px={4}
      py={2}
      shadow="lg"
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Heading
          as={RouterLink}
          to="/"
          size="lg"
          bgGradient={logoGradient}
          bgClip="text"
          _hover={{ textDecoration: 'none' }}
        >
          Panvas
        </Heading>
        <Flex gap={4}>
          <MotionButton
            as={RouterLink}
            to="/browse"
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Papers
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/community"
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Community
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/signin"
            bgGradient="linear(to-r, #f6416c, #ff8177)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, #ff8177, #f6416c)',
              transform: 'translateY(-2px)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </MotionButton>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar; 