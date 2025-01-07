import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, IconButton, Image, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navGradient = colorMode === 'light'
    ? 'linear(to-r, #fdfcfb, #e2d1c3)'
    : 'linear(to-r, #12063b, #09555c)';

  const buttonGradient = colorMode === 'light'
    ? 'linear(to-r, #f6416c, #ff8177)'
    : 'linear(to-r, #f6416c, #2d3436)';

  return (
    <Box
      bgGradient={navGradient}
      px={7}
      py={5}
      position="sticky"
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Heading
          as={RouterLink}
          to="/"
          size="lg"
        >
          <Stack direction="row" align="center" display="flex" alignItems="center">
            <Image 
            src="/panvas-logo.svg"
            alt="Panvas" 
            height="50px"
            />
            <Text 
            lineHeight="50px" 
            ml={2}
            fontSize="3xl"
            bgGradient={'linear(to-t, #F31C1C, #FA8AAE)'}
            bgClip="text"
            >Panvas</Text>
          </Stack>
        </Heading>
        <Flex gap={4}>
          <MotionButton
            as={RouterLink}
            to="/browse"
            variant="ghost"
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
            _hover={{ bg: 'whiteAlpha.200' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Community
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/signin"
            bgGradient={buttonGradient}
            color="white"
            _hover={{
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